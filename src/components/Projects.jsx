import React, { useState } from 'react';
import { Eye, Github, ExternalLink, X } from 'lucide-react';

const Projects = ({ isVisible }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Smart Parking System",
      summary: "An intelligent parking management solution using IoT sensors and machine learning algorithms to optimize parking space utilization, reduce traffic congestion, and provide real-time availability updates to users through a mobile application.",
      technologies: ["Python", "IoT", "Machine Learning", "React", "MongoDB"],
      github: "https://github.com/harshbansal/smart-parking",
      deploy: "https://smart-parking-demo.vercel.app"
    },
    {
      id: 2,
      title: "Face Detection & Gender Classification",
      summary: "Real-time face detection and gender classification application using OpenCV and deep learning. Features include live camera feed processing, batch image analysis, and accuracy metrics dashboard with 95%+ classification accuracy.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Flask"],
      github: "https://github.com/harshbansal/face-detection",
      deploy: "https://face-detection-app.herokuapp.com"
    },
    {
      id: 3,
      title: "Emotion-Sync Music Recommender",
      summary: "AI-powered music recommendation system that analyzes user emotions through facial expressions and recommends personalized playlists. Integrates with Spotify API and uses computer vision for real-time emotion detection.",
      technologies: ["Python", "Computer Vision", "Spotify API", "React", "Machine Learning"],
      github: "https://github.com/harshbansal/emotion-music",
      deploy: "https://emotion-sync-music.netlify.app"
    },
    {
      id: 4,
      title: "CampusPay",
      summary: "Comprehensive automated fee management system for educational institutions. Features include student portal, payment gateway integration, automated receipt generation, fee tracking, and administrative dashboard.",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "Payment Gateway"],
      github: "https://github.com/harshbansal/campuspay",
      deploy: "https://campuspay-demo.herokuapp.com"
    },
    {
      id: 5,
      title: "Market Analysis Dashboard",
      summary: "Interactive Power BI dashboard providing comprehensive market analysis with real-time data visualization, trend analysis, sales forecasting, and business intelligence insights for strategic decision making.",
      technologies: ["Power BI", "SQL", "Python", "Data Analytics", "DAX"],
      github: "https://github.com/harshbansal/market-dashboard",
      deploy: "https://market-analysis-dashboard.com"
    },
    {
      id: 6,
      title: "Stock Price Prediction",
      summary: "Machine learning model for predicting stock prices using historical data, technical indicators, and sentiment analysis. Implements LSTM neural networks and provides accuracy metrics with interactive visualization.",
      technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
      github: "https://github.com/harshbansal/stock-prediction",
      deploy: "https://stock-predictor-ml.streamlit.app"
    }
  ];

  return (
    <>
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
    </>
  );
};

export default Projects;