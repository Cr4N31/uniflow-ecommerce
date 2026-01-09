import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './ProductRender/Products';
import Home from '../pages/Home';
import Category from '../pages/Category';

function ProductLayout({ user, setUser, username, setUsername }) {
  const [currentPage, setCurrentPage] = useState("Products");

  return (
    <div className="min-h-screen flex bg-white">
      {/* Header */}
      <Header user={user} setUser={setUser} username={username} setUsername={setUsername} />

      {/* Sidebar */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main content */}
      <main className="flex-1 p-6 md:ml-24 mt-16">
        {currentPage === "Home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "Products" && <Products />}
        {currentPage === "Category" && <Category />}
      </main>
    </div>
  );
}

export default ProductLayout;
