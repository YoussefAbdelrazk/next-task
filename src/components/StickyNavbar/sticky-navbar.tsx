'use client';

import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/data/navbar';
import { Bell, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show sticky navbar after scrolling 100px
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className='bg-white border-b border-[#D9D9D9] py-7 flex items-center shadow-lg fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-300'>
      <div className='max-w-[1328px] mx-auto flex items-center justify-between w-full'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className='flex flex-col'>
            <span className='text-md text-gray-600'>هيئه فنون العماره والتصميم</span>
            <span className='text-md text-gray-500'> Architecture and Design Commission</span>
          </div>
        </div>

        {/* Menu items */}
        <div className='flex w-fit items-center gap-8 px-4'>
          {navItems.map(item => (
            <Link
              key={item.id}
              href={item.href}
              className='text-[#0F2837] text-sm font-medium hover:font-bold hover:text-md transition-all duration-300 px-2 flex items-center gap-2'
            >
              {item.label}
              {item.id === 2 && <ChevronDown size={15} className='text-[#EB5A3C]' />}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-4 px-4'>
          <Bell size={20} />
          <Button variant='outline' size='sm'>
            En
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='bg-[#EB5A3C] text-white hover:bg-[#EB5A3C]/90 hover:text-white cursor-pointer rounded-md'
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
