import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Link, NavLink } from "react-router-dom";


import {
  faEnvelope,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function AppBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
         
          <Link to="/" className="flex-1 flex items-center my-2  sm:justify-start">            
            <div className="flex-shrink-0 text-white text-xl font-bold">
              Mo Ghara
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/notice" className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none">
              <span className="sr-only">View messages</span>
              
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            
            <Link to="/notification" className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none">
              <span className="sr-only">View notifications</span>
              
              <FontAwesomeIcon icon={faBell} />
            </Link>
            
            <div className="relative">
              <Link
                onClick={toggleMenu}
                className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none"
              >
                
                <FontAwesomeIcon icon={faUser} />
              </Link>
              {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link to="/profile"  className="block px-4 py-2 text-sm text-gray-700">
                    Profile
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
