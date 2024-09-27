import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md fixed top-0 w-full z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10"
            alt="Logo"
          />
          <span className="self-center text-2xl font-bold text-gray-900 dark:text-gray-900">
            Placement Portal
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3">
          <Link
            to="/signup"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-600 transition duration-300"
          >
            Login
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-300"
            aria-controls="navbar"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "" : "hidden"
          }`}
          id="navbar"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-white md:space-x-8 md:flex-row md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-blue-600 bg-blue-50 rounded md:bg-transparent md:text-blue-600 md:p-0 dark:text-blue-600 dark:bg-blue-100"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
