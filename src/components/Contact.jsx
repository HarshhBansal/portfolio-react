import React from 'react';
import { Linkedin, Github, Code, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 transform hover:scale-105 transition-all duration-300">Let's Connect</h3>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://linkedin.com/in/harshbansal" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/harshbansal" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
            <Github size={24} />
          </a>
          <a href="https://leetcode.com/harshbansal" target="_blank" rel="noopener noreferrer" className="p-3 bg-orange-600 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
            <Code size={24} />
          </a>
          <a href="mailto:harsh.bansal@example.com" className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">© 2024 Harsh Bansal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;