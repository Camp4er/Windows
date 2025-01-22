import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-customGray shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl text-white font-bold">Birat Datta</h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
