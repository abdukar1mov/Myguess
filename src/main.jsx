import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initReactI18next } from 'react-i18next';
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import uz from "./locales/uz.json"
import i18next from 'i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { // English translations
        translation: en,
      },
      ru: { // French translations
        translation: ru,
      },
      uz: {
        translation: uz
      }
      // Add translations for other languages here
    },
    fallbackLng: 'ru', // Default language if translation not found
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    react: {
      wait: true,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
