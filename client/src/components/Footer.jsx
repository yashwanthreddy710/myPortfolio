import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <p className="text-sm md:text-base font-light leading-relaxed">
          Built to impress -- powered by MERN Stack & modern design.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yashwanthreddy710"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-reddy-/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-white mt-4">
          &copy; 2025 Yashwanth Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
