import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 p-6 mt-auto shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} College Placement Management System. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2 transition duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2 transition duration-200">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2 transition duration-200">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
