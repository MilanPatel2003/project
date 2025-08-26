import { useState, useEffect, createContext, useContext } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeState = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('trident-theme');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('trident-theme', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};