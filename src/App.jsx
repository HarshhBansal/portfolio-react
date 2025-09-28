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
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
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
    </div>
  );
};

export default App;