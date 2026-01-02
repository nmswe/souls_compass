// contexts/LanguageContext.js
'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('soulsCompassLanguage');
      if (savedLanguage === 'en' || savedLanguage === 'it') {
        return savedLanguage;
      }
    }
    return 'en';
  });

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('soulsCompassLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}