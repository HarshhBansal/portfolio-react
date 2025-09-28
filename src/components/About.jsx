import React from 'react';

const About = ({ isVisible }) => {
  const aboutData = {
    personalInfo: {
      name: "Harsh Bansal",
      photo: "https://via.placeholder.com/300x400/d1d5db/6b7280?text=Harsh+Bansal",
      summary: "I am Harsh Bansal, a Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning.",
      description: "Skilled in Python, Java, C++, JavaScript, SQL, Power BI, AWS, Selenium, and Jenkins."
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          About Me
        </h2>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 shadow-2xl">
              <img 
                src={aboutData.personalInfo.photo}
                alt={aboutData.personalInfo.name}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              {aboutData.personalInfo.name}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {aboutData.personalInfo.summary}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {aboutData.personalInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
