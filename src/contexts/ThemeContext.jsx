import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Clear existing classes and set the correct one
    document.documentElement.classList.remove('dark', 'light');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    console.log('Initial theme set to:', savedTheme); // Debug log
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove existing class and add the new one
    document.documentElement.classList.remove('dark', 'light');
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    console.log('Theme toggled to:', newTheme); // Debug log
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};