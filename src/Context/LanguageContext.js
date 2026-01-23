'use client';

import { createContext, useContext, useState } from 'react';
import en from '@/src/i18n/messages/en.json';
import ur from '@/src/i18n/messages/ur.json';
import ar from '@/src/i18n/messages/ar.json';

const messages = { en, ur, ar };

const LanguageContext = createContext();

// Provider component
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  // Translation function
  const t = (key) => messages[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
