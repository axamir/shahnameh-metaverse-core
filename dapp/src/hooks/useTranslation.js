import { useState, useCallback } from 'react';
import en from '../i18n/en.json';
import fa from '../i18n/fa.json';

const translations = { en, fa };

export function useTranslation() {
  const [lang, setLang] = useState('en');

  const t = useCallback((key, params = {}) => {
    let text = translations[lang]?.app?.[key] || key;
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    return text;
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'fa' : 'en');
  const direction = lang === 'fa' ? 'rtl' : 'ltr';

  return { t, lang, toggleLang, direction };
}
