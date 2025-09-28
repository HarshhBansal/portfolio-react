import React from 'react';
import { Linkedin, Github, Code, Mail } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-white dark:bg-black text-black dark:text-white py-4 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 transform hover:scale-105 transition-all duration-300">Let's Connect</h3>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://linkedin.com/in/harshbansal" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/harshbansal" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
            <Github size={24} />
          </a>
          <a href="mailto:harsh.bansal@example.com" className="p-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {currentYear} Harsh Bansal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;