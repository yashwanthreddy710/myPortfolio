import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>

        <div className="hidden xl:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize px-3 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1xSiMqHvvBvJ310AqfGrEpJPQDSvyhyPD/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
          >
            My Resume
          </a>
          <a
            href="https://github.com/yashwanthreddy710"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            GitHub
          </a>
        </div>

        {/* Hamburger for mobile */}
        <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-gray-900 px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="block capitalize py-2 border-b border-gray-700 hover:text-purple-400"
            >
              {item}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1xSiMqHvvBvJ310AqfGrEpJPQDSvyhyPD/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-600 hover:bg-purple-700 text-white text-center px-4 py-2 rounded-md transition"
          >
            My Resume
          </a>
          <a
            href="https://github.com/yashwanthreddy710"
            target="_blank"
            rel="noreferrer"
            className="block bg-purple-600 hover:bg-purple-700 text-white text-center px-4 py-2 rounded-md transition"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
