import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Track mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const downloadResume = () => {
    const resumeContent = `
HARSH BANSAL
AI & ML Engineer | Building Data-Driven & Real-World Solutions

CONTACT
Email: harsh.bansal@example.com
LinkedIn: linkedin.com/in/harshbansal
GitHub: github.com/harshbansal
LeetCode: leetcode.com/harshbansal

EDUCATION
Computer Science and Engineering
Specialization: Artificial Intelligence and Machine Learning

TECHNICAL SKILLS
Programming Languages: C++, C, Java, Python, JavaScript, HTML, CSS, SQL
Databases & Cloud: MongoDB, MySQL, Google Cloud
Version Control & CI/CD: Git/GitHub, Jenkins (beginner), Linux
Automation Tools & Testing: Selenium, Cypress (beginner), Postman, JUnit/TestNG
Interests: Full-Stack Development

SOFT SKILLS
Communication, Teamwork, Problem-Solving, Time Management, Statistics, Leadership

PROJECTS
1. Smart Parking System
   - IoT-based intelligent parking management solution
   - Technologies: Python, IoT, Machine Learning, React, MongoDB

2. Face Detection & Gender Classification App
   - Real-time computer vision application with 95%+ accuracy
   - Technologies: Python, OpenCV, TensorFlow, Deep Learning, Flask

3. Emotion-Sync Music Recommender
   - AI-powered music recommendation based on emotion detection
   - Technologies: Python, Computer Vision, Spotify API, React, ML

4. CampusPay
   - Automated fee management system for educational institutions
   - Technologies: Java, Spring Boot, MySQL, React, Payment Gateway

5. Market Analysis Dashboard (Power BI)
   - Interactive dashboard for comprehensive market analysis
   - Technologies: Power BI, SQL, Python, Data Analytics, DAX

6. Stock Price Prediction
   - ML model for financial market prediction using LSTM
   - Technologies: Python, TensorFlow, LSTM, Pandas, Matplotlib

EXPERIENCE & ACHIEVEMENTS
• Specialized in building innovative, real-world applications
• Strong foundation in AI, automation, and data analytics
• Experience with full-stack development and cloud deployment
• Passionate about solving complex problems with technology
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Harsh_Bansal_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      <Header />
      <Hero 
        isVisible={isVisible} 
        downloadResume={downloadResume} 
        scrollToProjects={scrollToProjects} 
      />
      <About isVisible={isVisible} />
      <Skills isVisible={isVisible} mousePosition={mousePosition} />
      <Projects isVisible={isVisible} />
      <Contact />

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .skill-card:hover {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default App;
            transition: 'all 0.8s ease-out'
          }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Harsh <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bansal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              AI & ML Engineer | Building Data-Driven & Real-World Solutions
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-2xl border border-blue-200">
              <p className="text-lg text-gray-700 font-medium">
                🚀 Passionate about <span className="font-bold text-blue-600">Full-Stack Development</span> & AI Innovation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={downloadResume}
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-2xl"
              >
                <Download className="mr-2 animate-pulse" size={20} />
                Download Resume
              </button>
              <button 
                onClick={scrollToProjects}
                className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-2xl"
              >
                <Eye className="mr-2" size={20} />
                View My Projects
              </button>
            </div>
          </div>
          <div className="flex justify-center animate-on-scroll" id="hero-image" style={{
            opacity: isVisible['hero-image'] ? 1 : 0,
            transform: `translateX(${isVisible['hero-image'] ? '0' : '30px'})`,
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-6">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center transform hover:rotate-12 transition-all duration-500">
                  <div className="text-8xl animate-pulse">👨‍💻</div>
                </div>
              </div>
              {/* Floating tech icons around profile */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                JS
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                PY
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{animationDelay: '2.5s'}}>
                ML
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{animationDelay: '3.5s'}}>
                AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 transform hover:scale-105 transition-all duration-300">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" id="about-text" style={{
              opacity: isVisible['about-text'] ? 1 : 0,
              transform: `translateY(${isVisible['about-text'] ? '0' : '30px'})`,
              transition: 'all 0.8s ease-out'
            }}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am Harsh Bansal, a Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning. I have worked on projects like Smart Parking System, Face Detection & Gender Classification App, Emotion-Sync Music Recommender, CampusPay, Market Analysis Dashboard (Power BI), and Stock Price Prediction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Skilled in Python, Java, C++, JavaScript, SQL, Power BI, AWS, Selenium, and Jenkins, I focus on building innovative, real-world applications that solve complex problems and create meaningful impact.
              </p>
            </div>
            <div className="animate-on-scroll" id="about-image" style={{
              opacity: isVisible['about-image'] ? 1 : 0,
              transform: `translateX(${isVisible['about-image'] ? '0' : '30px'})`,
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg text-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <div className="text-2xl mb-2 animate-pulse">🐍</div>
                    <div className="text-sm font-semibold">Python</div>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg text-center transform hover:scale-110 hover:-rotate-6 transition-all duration-300">
                    <div className="text-2xl mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>🤖</div>
                    <div className="text-sm font-semibold">AI/ML</div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <div className="text-2xl mb-2 animate-pulse" style={{animationDelay: '1s'}}>☁️</div>
                    <div className="text-sm font-semibold">Cloud</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Core Expertise</h3>
                  <p className="text-gray-600">Full-Stack Development • Machine Learning • Data Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 transform hover:scale-105 transition-all duration-300">Technical Arsenal</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Crafting solutions with cutting-edge technologies and methodologies</p>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-on-scroll" id="skills-programming">
              <span className="inline-flex items-center">
                <Code className="mr-3 text-blue-600" size={28} />
                Programming Languages
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {skillsData.programmingLanguages.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} category="programming" />
              ))}
            </div>
          </div>

          {/* Databases & Cloud */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-on-scroll" id="skills-databases">
              <span className="inline-flex items-center">
                <Database className="mr-3 text-green-600" size={28} />
                Databases & Cloud
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {skillsData.databases.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} category="databases" />
              ))}
            </div>
          </div>

          {/* Version Control & CI/CD */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-on-scroll" id="skills-version">
              <span className="inline-flex items-center">
                <GitBranch className="mr-3 text-purple-600" size={28} />
                Version Control & CI/CD
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {skillsData.versionControl.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} category="version" />
              ))}
            </div>
          </div>

          {/* Automation Tools & Testing */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-on-scroll" id="skills-automation">
              <span className="inline-flex items-center">
                <Settings className="mr-3 text-orange-600" size={28} />
                Automation Tools & Testing
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.automation.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} category="automation" />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-on-scroll" id="skills-soft">
              <span className="inline-flex items-center">
                <Users className="mr-3 text-pink-600" size={28} />
                Soft Skills & Leadership
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} category="soft" />
              ))}
            </div>
          </div>

          {/* Special Interest Highlight */}
          <div className="text-center animate-on-scroll" id="skills-interest" style={{
            opacity: isVisible['skills-interest'] ? 1 : 0,
            transform: `translateY(${isVisible['skills-interest'] ? '0' : '30px'})`,
            transition: 'all 0.8s ease-out'
          }}>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Heart className="mr-3 animate-pulse" size={24} />
                <span className="text-xl font-bold">Special Interest</span>
              </div>
              <p className="text-lg">Passionate about <span className="font-bold">Full-Stack Development</span></p>
              <p className="text-sm opacity-90 mt-1">Building end-to-end solutions with modern technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 transform hover:scale-105 transition-all duration-300">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-on-scroll bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 overflow-hidden group"
                id={`project-${project.id}`}
                style={{
                  opacity: isVisible[`project-${project.id}`] ? 1 : 0,
                  transform: `translateY(${isVisible[`project-${project.id}`] ? '0' : '30px'})`,
                  transition: `all 0.8s ease-out ${index * 0.1}s`
                }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">💻</div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transform hover:scale-105 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye className="mr-2" size={16} />
                      Expand
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-gray-300 rounded-lg hover:border-green-600 hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 hover:scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalFadeIn 0.3s ease-out'
            }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.summary}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transform hover:scale-105 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="mr-2" size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .skill-card:hover {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default App;