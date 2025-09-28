import React from 'react';

const About = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white transform hover:scale-105 transition-all duration-300">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" id="about-text" style={{
            opacity: isVisible['about-text'] ? 1 : 0,
            transform: `translateY(${isVisible['about-text'] ? '0' : '30px'})`,
            transition: 'all 0.8s ease-out'
          }}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am Harsh Bansal, a Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning. I have worked on projects like Smart Parking System, Face Detection & Gender Classification App, Emotion-Sync Music Recommender, CampusPay, Market Analysis Dashboard (Power BI), and Stock Price Prediction.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Skilled in Python, Java, C++, JavaScript, SQL, Power BI, AWS, Selenium, and Jenkins, I focus on building innovative, real-world applications that solve complex problems and create meaningful impact.
            </p>
          </div>
          <div className="animate-on-scroll" id="about-image" style={{
            opacity: isVisible['about-image'] ? 1 : 0,
            transform: `translateX(${isVisible['about-image'] ? '0' : '30px'})`,
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border border-gray-600">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-900 p-4 rounded-lg text-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <div className="text-2xl mb-2 animate-pulse">🐍</div>
                  <div className="text-sm font-semibold text-blue-400">Python</div>
                </div>
                <div className="bg-purple-900 p-4 rounded-lg text-center transform hover:scale-110 hover:-rotate-6 transition-all duration-300">
                  <div className="text-2xl mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>🤖</div>
                  <div className="text-sm font-semibold text-purple-400">AI/ML</div>
                </div>
                <div className="bg-green-900 p-4 rounded-lg text-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <div className="text-2xl mb-2 animate-pulse" style={{animationDelay: '1s'}}>☁️</div>
                  <div className="text-sm font-semibold text-green-400">Cloud</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Core Expertise</h3>
                <p className="text-gray-400">Full-Stack Development • Machine Learning • Data Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;