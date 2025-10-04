"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations, type Locale } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Check if URL starts with /eng only after mount
    if (typeof window !== 'undefined') {
      if (pathname.startsWith('/eng')) {
        setLocale('en');
      } else {
        setLocale('pt');
      }
    }
  }, [pathname]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    
    if (mounted) {
      if (newLocale === 'en') {
        // Redirect to English version
        if (!pathname.startsWith('/eng')) {
          router.push(`/eng${pathname}`);
        }
      } else {
        // Redirect to Portuguese version
        if (pathname.startsWith('/eng')) {
          router.push(pathname.replace('/eng', ''));
        }
      }
    }
  };

  const t = translations[locale];

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: 'pt', setLocale: () => {}, t: translations.pt }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
