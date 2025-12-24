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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to false (light mode)
    const saved = localStorage.getItem('fiidi-theme');
    // Only return true if explicitly set to 'dark', otherwise default to light
    return saved === 'dark';
  });

  // Apply theme class immediately on mount AND when isDarkMode changes
  useEffect(() => {
    // Remove both classes first to ensure clean state
    document.body.classList.remove('dark-mode', 'light-mode');
    
    // Apply the correct class
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    
    // Save to localStorage
    localStorage.setItem('fiidi-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Also apply on initial render before React hydrates
  useEffect(() => {
    // Clear any existing saved theme to force light mode on first visit
    if (!localStorage.getItem('fiidi-theme')) {
      localStorage.setItem('fiidi-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

