"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdDownload, IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 z-50 sticky top-0 shadow-lg">
      <header className="text-gray-200 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <span className="ml-3 text-2xl font-bold text-yellow-400">S-J Developer</span>
          
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-yellow-400 focus:outline-none"
            >
              {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
            </button>
          </div>

          {/* Navbar Links */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center w-full md:w-auto md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0`}
          >
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contacts" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 font-semibold text-lg hover:text-yellow-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Download CV Button */}
          <a href="/cv.jpg" download="My_CV.jpg" className="hidden md:inline-flex">
            <button className="flex items-center bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200">
              Download CV
              <IoMdDownload className="ml-2 text-lg" />
            </button>
          </a>

          {/* Download CV Button for Mobile */}
          {menuOpen && (
            <a href="/cv.jpg" download="My_CV.jpg" className="md:hidden mt-4">
              <button className="flex items-center bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 w-full justify-center">
                Download CV
                <IoMdDownload className="ml-2 text-lg" />
              </button>
            </a>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
