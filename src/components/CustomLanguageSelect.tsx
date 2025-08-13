'use client';

import { useEffect, useState, useRef } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'it', label: 'Italian', flag: '🇮🇹' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'zh-TW', label: 'Chinese (Traditional)', flag: '🇹🇼' },
];

export default function CustomLanguageSelect() {
  const [selected, setSelected] = useState('en');
  const [isReady, setIsReady] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Wait for Google Translate select combo
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector('select.goog-te-combo');
      if (combo) {
        setIsReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Restore language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang && storedLang !== 'en') {
      changeLanguage(storedLang, false);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Language changer
  const changeLanguage = (lang: string, reload = true) => {
    const domain = window.location.hostname;

    document.cookie = `googtrans=/en/${lang};path=/;domain=${domain}`;
    window.location.hash = `#googtrans(en|${lang})`;
    localStorage.setItem('lang', lang);
    setSelected(lang);
    setOpen(false);

    if (reload) {
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  };

  const selectedLang = languages.find((l) => l.code === selected);

  return (
    <div
      className="fixed bottom-4 left-4 z-50 notranslate"
      ref={menuRef}
      translate="no"
    >
      {/* Trigger */}
      <button
        disabled={isReady}
        onClick={() => setOpen(!open)}
        className="bg-white border border-gray-300 px-3 py-1.5 rounded shadow flex items-center text-sm gap-1 hover:bg-gray-100"
      >
        <span>{selectedLang?.flag}</span>
        <span className="uppercase">{selectedLang?.code}</span>
        <svg
          className="w-3 h-3 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="mt-2 w-44 bg-white border border-gray-200 rounded shadow absolute left-0 bottom-[115%] z-50">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
            >
              <span>{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
