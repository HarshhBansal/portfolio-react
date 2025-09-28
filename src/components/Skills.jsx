import React, { useState, useRef } from 'react';
import { Code, Database, GitBranch, Settings, Users, Heart } from 'lucide-react';

const Skills = ({ isVisible, mousePosition }) => {
  // Skills data organized by categories
  const skillsData = {
    programmingLanguages: [
      { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-300 to-yellow-600' },
      { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-500' },
      { name: 'C++', icon: '⚙️', color: 'from-blue-600 to-purple-600' },
      { name: 'C', icon: '🔧', color: 'from-gray-600 to-gray-800' },
      { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
      { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-purple-500' },
      { name: 'SQL', icon: '🗃️', color: 'from-green-500 to-blue-500' }
    ],
    databases: [
      { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
      { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800' },
      { name: 'Google Cloud', icon: '☁️', color: 'from-blue-400 to-green-400' }
    ],
    versionControl: [
      { name: 'Git/GitHub', icon: '📱', color: 'from-gray-700 to-black' },
      { name: 'Jenkins', icon: '🔄', color: 'from-blue-600 to-indigo-600' },
      { name: 'Linux', icon: '🐧', color: 'from-yellow-500 to-red-500' }
    ],
    automation: [
      { name: 'Selenium', icon: '🔍', color: 'from-green-600 to-emerald-600' },
      { name: 'Cypress', icon: '🌲', color: 'from-green-500 to-teal-500' },
      { name: 'Postman', icon: '📮', color: 'from-orange-500 to-red-500' },
      { name: 'JUnit/TestNG', icon: '✅', color: 'from-green-600 to-blue-600' }
    ],
    softSkills: [
      { name: 'Communication', icon: '💬', color: 'from-blue-500 to-cyan-500' },
      { name: 'Teamwork', icon: '👥', color: 'from-purple-500 to-pink-500' },
      { name: 'Problem-Solving', icon: '🧩', color: 'from-indigo-500 to-purple-500' },
      { name: 'Time Management', icon: '⏰', color: 'from-yellow-500 to-orange-500' },
      { name: 'Statistics', icon: '📊', color: 'from-green-500 to-blue-500' },
      { name: 'Leadership', icon: '👑', color: 'from-yellow-600 to-red-500' }
    ]
  };

  // 3D transform based on mouse position
  const get3DTransform = (element) => {
    if (!element) return {};
    const rect = element.getBoundingClientRect();
    const x = mousePosition.x - (rect.left + rect.width / 2);
    const y = mousePosition.y - (rect.top + rect.height / 2);
    const rotateX = (y / rect.height) * 10;
    const rotateY = (x / rect.width) * -10;
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  const SkillCard = ({ skill, index, category }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={cardRef}
        className="skill-card group relative"
        style={{
          opacity: isVisible[`skills-${category}`] ? 1 : 0,
          transform: `translateY(${isVisible[`skills-${category}`] ? '0' : '30px'})`,
          transition: `all 0.6s ease-out ${index * 0.1}s`,
          ...(isHovered ? get3DTransform(cardRef.current) : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
              {skill.icon}
            </div>
            <h3 className="text-white font-bold text-lg">{skill.name}</h3>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  return (
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
  );
};

export default Skills;