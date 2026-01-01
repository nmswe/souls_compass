// contexts/LanguageContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Carica la lingua salvata al mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('soulsCompassLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'it')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('soulsCompassLanguage', lang);
  };

  // Non renderizzare finché non abbiamo caricato la lingua
  if (!isLoaded) {
    return null;
  }

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