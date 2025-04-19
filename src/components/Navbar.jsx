import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile toggle icons

const Navbar = ({ cartItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
          // primary: "#0F9D58",  // Green
    <nav className="bg-green-600 text-gray-600 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">MedSupply</Link>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>

          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="hover:underline"
            >
              More
            </button>
            {isMoreDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg py-2 z-10">
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                <Link to="/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
                <Link to="/privacy-policy" className="block px-4 py-2 hover:bg-gray-100">Privacy Policy</Link>
              </div>
            )}
          </li>

          {/* Cart */}
          <li className="relative">
            <Link to="/cart" className="hover:underline flex items-center gap-2">
              <FaShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          {/* Profile/Auth */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2"
              >
                <span className="text-lg font-semibold">{user.name}</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg p-2 z-10">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-200 rounded w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </div>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col mt-4 space-y-4 text-white md:hidden font-medium">
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/products" onClick={toggleMobileMenu}>Products</Link></li>
          <li><Link to="/blogs" onClick={toggleMobileMenu}>Blogs</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
          <li><Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link></li>
          <li><Link to="/support" onClick={toggleMobileMenu}>Support</Link></li>
          <li><Link to="/privacy-policy" onClick={toggleMobileMenu}>Privacy Policy</Link></li>
          <li><Link to="/cart" onClick={toggleMobileMenu}>Cart ({cartItems.length})</Link></li>

          {user ? (
            <li>
              <button onClick={handleLogout} className="w-full text-left">Logout</button>
            </li>
          ) : (
            <>
              <li><Link to="/login" onClick={toggleMobileMenu}>Login</Link></li>
              <li><Link to="/register" onClick={toggleMobileMenu}>Register</Link></li>
            </>
          )}
        </ul>
      )}
      <div className="h-1 bg-white"></div>
    </nav>
  );
};

export default Navbar;
