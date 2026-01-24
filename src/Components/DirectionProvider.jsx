'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/src/Context/LanguageContext';

export default function DirectionProvider({ children }) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.dir =
      lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr';
  }, [lang]);

  return <>{children}</>;
}
