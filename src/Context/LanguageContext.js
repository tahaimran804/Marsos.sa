'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import en from '@/src/i18n/messages/en.json';
import ur from '@/src/i18n/messages/ur.json';
import ar from '@/src/i18n/messages/ar.json';

const messages = { en, ur, ar };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  });
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = (key) => messages[lang]?.[key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
