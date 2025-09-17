'use client';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Bell, ChevronDown, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SharedButton from '../Shared/SharedButton';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='bg-[#ffffff] border-b border-[#D9D9D9] py-4 md:py-7 flex items-center shadow-md fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-300'>
      <div className='max-w-[1328px] mx-auto flex items-center justify-between w-full px-4'>
        {/* Logo/Brand - visible on all screens */}
        <div className='flex md:hidden items-center '>
          <Link
            href='/'
            className='text-xl font-bold text-main hover:text-main/80 transition-colors'
          >
            Logo
          </Link>
        </div>

        {/* Desktop menu items - hidden on mobile */}
        <div className='hidden lg:flex w-fit items-center gap-6 xl:gap-8'>
          <Link href='/' className='nav-item'>
            {t('home')}
          </Link>
          <Link href='/articles/new' className='nav-item'>
            {t('articles')}
            <ChevronDown size={15} className='text-[#EB5A3C]' />
          </Link>
          <Link href='/dashboard' className='nav-item'>
            {t('contributors')}
          </Link>
          <Link href='/account-pay' className='nav-item'>
            {t('interactiveMap')}
          </Link>
          <Link href='/my-articles' className='nav-item'>
            {t('askAQuestion')}
          </Link>
          <Link href='/users' className='nav-item'>
            {t('about')}
          </Link>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <div className='hidden lg:flex items-center gap-4'>
          <Bell size={20} />
          <LanguageSwitcher />
          <SharedButton bgColor='bg-[#EB5A3C]' textColor='text-white' title='Login' />
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden flex items-center gap-2 sm:gap-4'>
          <Bell size={20} className='text-gray-600' />
          <LanguageSwitcher />
          <button
            onClick={toggleMobileMenu}
            className='p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main transition-colors'
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Mobile menu header */}
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-900'>Menu</h2>
            <button
              onClick={closeMobileMenu}
              className='p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main'
              aria-label='Close mobile menu'
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile menu items */}
          <nav className='flex-1 px-4 py-6 space-y-1 overflow-y-auto'>
            <Link
              href='/'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              {t('home')}
            </Link>
            <Link
              href='/articles/new'
              className='flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              <span>{t('articles')}</span>
              <ChevronDown size={15} className='text-[#EB5A3C]' />
            </Link>
            <Link
              href='/dashboard'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              {t('contributors')}
            </Link>
            <Link
              href='/account-pay'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              {t('interactiveMap')}
            </Link>
            <Link
              href='/my-articles'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              {t('askAQuestion')}
            </Link>
            <Link
              href='/users'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-main hover:bg-gray-50 rounded-md transition-colors'
              onClick={closeMobileMenu}
            >
              {t('about')}
            </Link>
          </nav>

          {/* Mobile menu footer with login button */}
          <div className='p-4 border-t border-gray-200'>
            <SharedButton
              bgColor='bg-[#EB5A3C]'
              textColor='text-white'
              title='Login'
              className='!w-full justify-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
