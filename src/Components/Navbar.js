import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon
import logo from '../../src/assets/image copy.png';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full text-white fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl">
          <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
       
        </Link>

        {/* Desktop Menu */}
        

          <button
            onClick={() => {
              if (isAuthenticated) {
                handleLogout();
                alert('You have been signed out.');
              } else {
                navigate('/login');
              }
            }}
            className="hover:text-gray-400"
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
   
      
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          

          <button
            onClick={() => {
              toggleMobileMenu();
              if (isAuthenticated) {
                handleLogout();
                alert('You have been signed out.');
              } else {
                navigate('/login');
              }
            }}
            className="hover:text-gray-400"
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
