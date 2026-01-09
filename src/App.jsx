import { CartProvider, useCart } from "./components/Cart/CartContext";
import ProductLayout from "./components/Products/ProductLayout";
import CartLayout from "./components/Cart/CartLayout";
import AuthLayout from "./components/auth/AuthLayout";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AppContent() {
  const { isCartOpen } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <ProductLayout user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            !user ? (
              <AuthLayout setUser={setUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      {isCartOpen && <CartLayout />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
