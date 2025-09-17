'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'En', flag: '🇺🇸' },
    { code: 'ar', name: 'Ar', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
      >
        <Globe size={20} />

        <span className='bg-main text-white px-2 py-1 rounded cursor-pointer'>{currentLanguage.name}</span>

      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50'>
          <div className='py-1'>
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`${
                  locale === language.code
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                } flex items-center w-full px-4 py-2 text-sm transition-colors`}
              >
                <span className='mr-3'>{language.flag}</span>
                <span>{language.name}</span>
                {locale === language.code && (
                  <svg className='ml-auto h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
