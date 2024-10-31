import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = useRef(null); // Reference for the menu

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="flex-1 flex items-center my-2 sm:justify-start">
            <div className="flex-shrink-0 text-white text-xl font-bold">RentHub</div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/notice" className="text-white hover:text-gray-300">
              <span className="sr-only">View messages</span>
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </Link>

            <Link to="/notification" className="text-white hover:text-gray-300">
              <span className="sr-only">View notifications</span>
              <FontAwesomeIcon icon={faBell} className="text-2xl" />
            </Link>

            <div className="relative" ref={menuRef}>
              <Link
                onClick={toggleMenu}
                className="text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </Link>
              {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">
                    Profile
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">
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
