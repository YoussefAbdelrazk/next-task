import Rate from '@/components/Footer/rate';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function footer() {
  return (
    <div>
      {/* Rate */}
      <Rate />
      {/* Footer */}
      <div className='bg-main py-6 px-4 sm:px-8 lg:px-20 text-white'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4'>
          {/* left */}
          <div className='text-center lg:text-left'>
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-lg sm:text-xl font-medium'>
              <span className='hover:text-gray-200 transition-colors cursor-pointer'>FAQs</span>
              <span className='hover:text-gray-200 transition-colors cursor-pointer'>
                Contact Us
              </span>
              <span className='hover:text-gray-200 transition-colors cursor-pointer'>
                Media Center
              </span>
            </div>
            <p className='text-lg sm:text-xl font-medium mb-4 mt-6'>Follow Us</p>
            <div className='flex items-center justify-center lg:justify-start gap-4'>
              <Facebook
                size={16}
                className='hover:text-gray-200 transition-colors cursor-pointer'
              />
              <Instagram
                size={16}
                className='hover:text-gray-200 transition-colors cursor-pointer'
              />
              <Twitter size={16} className='hover:text-gray-200 transition-colors cursor-pointer' />
              <Linkedin
                size={16}
                className='hover:text-gray-200 transition-colors cursor-pointer'
              />
              <Youtube size={16} className='hover:text-gray-200 transition-colors cursor-pointer' />
            </div>
          </div>

          {/* right */}
          <div className='flex flex-col items-center'>
            <h2 className='text-lg sm:text-xl font-medium mb-4'>Accessibility Tools</h2>
            <div className='flex items-center gap-2 sm:gap-4'>
              <button className='bg-main text-white border border-white p-2 rounded-md hover:bg-white hover:text-main transition-colors'>
                A+
              </button>
              <button className='bg-main text-white border border-white p-2 rounded-md hover:bg-white hover:text-main transition-colors'>
                A
              </button>
              <button className='bg-main text-white border border-white p-2 rounded-md hover:bg-white hover:text-main transition-colors'>
                A-
              </button>
            </div>
            <div className='mt-4'>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-white my-6'></div>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left'>
          <p className='text-sm'>© 2025 All rights reserved</p>
          <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm'>
            <span className='hover:text-gray-200 transition-colors cursor-pointer'>
              Terms of Use
            </span>
            <span className='hover:text-gray-200 transition-colors cursor-pointer'>
              Privacy Policy
            </span>
            <span className='hover:text-gray-200 transition-colors cursor-pointer'>
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
