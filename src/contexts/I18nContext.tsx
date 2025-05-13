import { createContext, useContext, ReactNode, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationDE from '../locales/de/translation.json';
import translationEN from '../locales/en/translation.json';

const resources = {
  de: {
    translation: translationDE
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

interface I18nContextType {
  changeLanguage: (lang: string) => void;
  language: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document language attribute
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ changeLanguage, language: i18n.language }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}