import React, { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ downloadResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-black dark:text-white transform hover:scale-110 transition-transform duration-300">
            Harsh <span className="text-gray-600 dark:text-gray-400">Bansal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
            
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Resume button */}
            <button 
              onClick={downloadResume}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transform hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300">Home</a>
            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300">About</a>
            <a href="#skills" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300">Skills</a>
            <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300">Projects</a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300">Contact</a>
            
            {/* Mobile theme toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 transition-all duration-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span>Toggle Theme</span>
            </button>
            
            {/* Mobile Resume button */}
            <button 
              onClick={downloadResume}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 w-full text-center"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;