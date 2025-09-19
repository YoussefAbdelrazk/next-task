import { Button } from '@/components/ui/button';
import { buttonStyles, layoutStyles } from '@/lib/utils/styles';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <div className='relative  bg-main overflow-hidden '>
      {/* Background Graphics */}
      <div className='absolute inset-0 opacity-20 hero-bg-svg'>
        {/* Additional overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F2837]/20'></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 ${layoutStyles.container} py-12`}>
        <div className='text-center mb-12'>
          {/* Main Title */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight max-w-[825px] mx-auto'>
            Innovative Architecture Solutions
            <br /> for Modern Design
          </h1>

          {/* CTA Button */}
          <Button className={`${buttonStyles.primary} h-[53px] flex items-center gap-2 mx-auto`}>
            Explore more
            <ArrowRight size={20} />
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
    </div>
  );
}
