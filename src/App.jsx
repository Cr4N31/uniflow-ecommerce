import { CartProvider, useCart } from "./components/Cart/CartContext";
import ProductLayout from "./components/Products/ProductLayout";
import CartLayout from "./components/Cart/CartLayout";
import AuthLayout from "./components/auth/AuthLayout";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AppContent() {
  const { isCartOpen } = useCart(); // ✅ useCart is now inside CartProvider
  const [user, setUser] = useState(null);
   const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<ProductLayout  
          user={user} 
          username={username} 
          setUsername={setUsername}  />} />

        {/* Login route */}
        <Route
          path="/login"
          element={!user ? <AuthLayout  
            setUser={setUser} 
            username={username} 
            setUsername={setUsername} 
          /> : 
          <Navigate to="/" />}
        />
      </Routes>

      {/* Cart sidebar rendered outside Routes */}
      {isCartOpen && <CartLayout />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
