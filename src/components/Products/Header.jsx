import { useState } from "react";
import CartIcon from "../../assets/cart-shopping-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useCart } from "../Cart/CartContext";

function Header({ user, setUser }) {
  const { toggleCart, cartCount, clearCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    clearCart();
    setMenuOpen(false);
  }

  return (
    <header className="bg-white fixed top-0 left-0 right-0 border-b border-gray-200 z-50">
      <nav className="px-4 md:px-6 py-3 max-w-7xl mx-auto">

        {/* Desktop Row */}
        <div className="md:flex md:items-center md:justify-between md:gap-6">

          {/* Logo + Mobile Controls */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-teal-500">
              Uniflo
            </h1>

            {/* Mobile Cart + Hamburger */}
            <div className="flex items-center gap-4 md:hidden">
              <button onClick={toggleCart} className="relative">
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
                <img src={CartIcon} alt="cart" className="w-6 h-6" />
              </button>

              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-3 flex gap-2 md:mt-0 md:flex-1 md:max-w-lg">
            <input
              type="search"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
              Search
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">

            {!user ? (
              <Link
                to="/login"
                className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition"
              >
                Login
              </Link>
            ) : (
              <>
                <span className="font-medium text-gray-700">
                  {user.username}
                </span>

                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 transition"
                  title="Logout"
                >
                  <LogOut size={22} />
                </button>
              </>
            )}

            <button onClick={toggleCart} className="relative">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
              <img src={CartIcon} alt="cart" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-3 border-t pt-4">

            {!user ? (
              <Link
                to="/login"
                className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <span className="px-4 font-medium text-gray-700">
                  {user.username}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 px-4 py-2"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            )}
          </div>
        )}

      </nav>
    </header>
  );
}

export default Header;
