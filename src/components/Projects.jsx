import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
      github: 'https://github.com/harshbhatia66/ecommerce-platform',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with team collaboration features.',
      github: 'https://github.com/harshbhatia66/task-manager',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive maps.',
      github: 'https://github.com/harshbhatia66/weather-dashboard',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing my projects and skills.',
      github: 'https://github.com/harshbhatia66/portfolio',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts and analytics.',
      github: 'https://github.com/harshbhatia66/social-dashboard',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'An educational platform with course management, student tracking, and interactive lessons.',
      github: 'https://github.com/harshbhatia66/lms-platform',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x300/e5e7eb/6b7280?text=Project+Image';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
