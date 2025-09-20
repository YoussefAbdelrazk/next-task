import { Button } from '@/components/ui/button';
import { ARIA_LABELS } from '@/lib/utils/accessibility';
import { buttonStyles, layoutStyles } from '@/lib/utils/styles';
import { ArrowRight } from 'lucide-react';

import Image from 'next/image';

export default function HeroSection() {


  return (
    <section
      className='relative bg-main overflow-hidden'
      role='banner'
      aria-labelledby='hero-title'
    >
      {/* Background Graphics */}
      <div className='absolute inset-0 opacity-20 hero-bg-svg' aria-hidden='true'>
        {/* Additional overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F2837]/20'></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 ${layoutStyles.container} py-12`}>
        <div className='text-center mb-12'>
          {/* Main Title */}
          <h1
            id='hero-title'
            className='text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight max-w-[825px] mx-auto'
          >
            Innovative Architecture Solutions
            <br /> for Modern Design
          </h1>

          {/* CTA Button */}
          <Button
            className={`${buttonStyles.primary} h-[53px] flex items-center gap-2 mx-auto`}
            aria-label={ARIA_LABELS.primaryAction}
          >
            Explore more
            <ArrowRight size={20} aria-hidden='true' />
          </Button>
        </div>

        <div>
          <Image
            src='/assets/herocards.png'
            alt='hero'
            width={1000}
            height={1000}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
