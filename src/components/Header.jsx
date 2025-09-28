import React, { useState } from 'react';
import { Menu, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white transform hover:scale-110 transition-transform duration-300">
            HB<span className="text-blue-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Contact</a>
            
            {/* Theme toggle button */}
            <button className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800">
              <Moon size={20} />
            </button>
            
            {/* Resume button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Resume
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 py-2 transition-all duration-300">Home</a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 py-2 transition-all duration-300">About</a>
            <a href="#skills" className="block text-gray-300 hover:text-blue-400 py-2 transition-all duration-300">Skills</a>
            <a href="#projects" className="block text-gray-300 hover:text-blue-400 py-2 transition-all duration-300">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 py-2 transition-all duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;