import React from 'react';
import { Download, Eye, Github, Mail, Linkedin } from 'lucide-react';

const Hero = ({ isVisible, downloadResume, scrollToProjects }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden bg-gray-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left side - Introduction */}
        <div className="space-y-8 text-white">
          <div className="space-y-2">
            <p className="text-blue-400 font-medium text-lg tracking-wide">Hello! I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Harsh <span className="text-blue-400">Bansal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              AI & ML Engineer & Full-Stack Developer
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Building elegant solutions to complex problems with modern technologies. 
            Passionate about creating innovative applications that make a real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProjects}
              className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </button>
            <button 
              onClick={downloadResume}
              className="flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a href="https://github.com/harshbansal" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/harshbansal" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:harsh.bansal@example.com" 
               className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right side - Code Editor Style Profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Terminal/Editor Window */}
            <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden max-w-md w-full">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm font-medium">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-500 mb-4">// Software Engineer</div>
                
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-purple-400">const</span>
                    <span className="text-white ml-2">developer</span>
                    <span className="text-white ml-2">=</span>
                    <span className="text-yellow-400 ml-2">{'{'}</span>
                  </div>
                  
                  <div className="ml-4 space-y-1">
                    <div className="flex">
                      <span className="text-red-400">name:</span>
                      <span className="text-green-400 ml-2">'Harsh Bansal'</span>
                      <span className="text-white">,</span>
                    </div>
                    
                    <div className="flex">
                      <span className="text-red-400">skills:</span>
                      <span className="text-white ml-2">[</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div><span className="text-green-400">'Python'</span><span className="text-white">,</span></div>
                      <div><span className="text-green-400">'JavaScript'</span><span className="text-white">,</span></div>
                      <div><span className="text-green-400">'React'</span><span className="text-white">,</span></div>
                      <div><span className="text-green-400">'AI/ML'</span><span className="text-white">,</span></div>
                    </div>
                    <div className="text-white">],</div>
                    
                    <div className="flex">
                      <span className="text-red-400">focuses:</span>
                      <span className="text-white ml-2">[</span>
                      <span className="text-green-400">'Full-Stack'</span>
                      <span className="text-white">,</span>
                      <span className="text-green-400 ml-1">'AI/ML'</span>
                      <span className="text-white">],</span>
                    </div>
                    
                    <div className="flex">
                      <span className="text-red-400">learning:</span>
                      <span className="text-green-400 ml-2">'Always'</span>
                    </div>
                  </div>
                  
                  <div className="text-yellow-400">{'};'}</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the terminal */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s'}}></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 -right-2 w-10 h-10 bg-green-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-2 -left-8 w-4 h-4 bg-yellow-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;