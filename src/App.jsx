import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [isVisible, setIsVisible] = useState({
    'hero-text': true,
    'hero-image': true
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Add a small delay to ensure elements are rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const downloadResume = () => {
    // Create a proper PDF download link
    const link = document.createElement('a');
    link.href = '/Harsh Resume.pdf'; // Use the actual filename in the public folder
    link.download = 'Harsh_Bansal_Resume.pdf';
    link.target = '_blank';
    
    // Add error handling for cases where the file might not be found
    link.onerror = () => {
      console.error('Resume PDF not found, creating fallback text version');
      const resumeContent = `HARSH BANSAL
AI & ML Engineer | Building Data-Driven & Real-World Solutions

CONTACT
Email: harsh.bansal@example.com
LinkedIn: linkedin.com/in/harshbansal
GitHub: github.com/harshbansal

EDUCATION
Computer Science and Engineering
Specialization: Artificial Intelligence and Machine Learning

TECHNICAL SKILLS
Programming Languages: C++, C, Java, Python, JavaScript, HTML, CSS, SQL
Databases & Cloud: MongoDB, MySQL, Google Cloud
Version Control & CI/CD: Git/GitHub, Jenkins, Linux
Automation Tools & Testing: Selenium, Cypress, Postman, JUnit/TestNG

PROJECTS
• Smart Parking System - IoT-based intelligent parking management
• Face Detection & Gender Classification - Real-time AI application
• Emotion-Sync Music Recommender - AI-powered music recommendation
• CampusPay - Automated fee management system
• Market Analysis Dashboard - Interactive Power BI dashboard
• Stock Price Prediction - ML model using LSTM networks

ACHIEVEMENTS
• Specialized in building innovative, real-world applications
• Strong foundation in AI, automation, and data analytics
• Experience with full-stack development and cloud deployment`;

      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const fallbackLink = document.createElement('a');
      fallbackLink.href = url;
      fallbackLink.download = 'Harsh_Bansal_Resume.txt';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(fallbackLink);
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Dynamic background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>
      <Header downloadResume={downloadResume} />
      <Hero 
        isVisible={isVisible} 
        downloadResume={downloadResume} 
        scrollToProjects={scrollToProjects} 
      />
      <About isVisible={isVisible} />
      <Skills />
      <Projects isVisible={isVisible} />
      <Contact />
    </div>
  );
};

export default App;