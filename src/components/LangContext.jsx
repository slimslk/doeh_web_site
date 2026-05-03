import { createContext, useContext, useState } from 'react';
import { translations, detectLanguage, saveLanguage } from '../i18n/index.js';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);

  function setLang(code) {
    setLangState(code);
    saveLanguage(code);
  }

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
