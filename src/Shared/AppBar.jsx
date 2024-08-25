import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
export default function AppBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-blue-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          <div className="flex-1 flex items-center my-2  sm:justify-start">
            <div className="flex-shrink-0 text-white text-xl font-bold">
              Ghara
            </div>
            
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none">
              <span className="sr-only">View messages</span>
              {/* <MailIcon className="h-6 w-6" /> */}
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none">
              <span className="sr-only">View notifications</span>
              {/* <BellIcon className="h-6 w-6" /> */}
              <FontAwesomeIcon icon={faBell} />
            </button>
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="bg-blue-600 p-1 rounded-full text-white hover:text-gray-300 focus:outline-none"
              >
                {/* <UserCircleIcon className="h-6 w-6" /> */}
                <FontAwesomeIcon icon={faUser} />
              </button>
              {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    My account
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
