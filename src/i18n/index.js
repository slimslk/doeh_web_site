import en from './en.js';
import de from './de.js';
import ua from './ua.js';

export const translations = { en, de, ua };

export const SUPPORTED_LANGS = ['en', 'de', 'ua'];

/**
 * Detect user language from browser locale.
 * Priority: localStorage override → browser language → default 'en'
 */
export function detectLanguage() {
  // 1. Check if user previously selected a language
  const saved = localStorage.getItem('doeh_lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  // 2. Try to match browser language
  const browserLang = navigator.language || navigator.userLanguage || '';
  const code = browserLang.split('-')[0].toLowerCase();

  if (SUPPORTED_LANGS.includes(code)) return code;

  // 3. Default to English
  return 'en';
}

export function saveLanguage(lang) {
  localStorage.setItem('doeh_lang', lang);
}
