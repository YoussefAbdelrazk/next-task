import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');

  const contentCards = [
    {
      id: 1,
      number: '01',
      title: t('card1.title'),
      description: t('card1.description'),
    },
    {
      id: 2,
      number: '02',
      title: t('card2.title'),
      description: t('card2.description'),
    },
    {
      id: 3,
      number: '03',
      title: t('card3.title'),
      description: t('card3.description'),
    },
  ];

  return (
    <div className='relative  bg-main overflow-hidden '>
      {/* Background Graphics */}
      <div className='absolute inset-0 opacity-20 hero-bg-svg'>
        {/* Additional overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F2837]/20'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          {/* Main Title */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight max-w-[825px] mx-auto'>
            Innovative Architecture Solutions
            <br /> for Modern Design
          </h1>

          {/* CTA Button */}
          <Button className='bg-[#EB5A3C] h-[53px] hover:bg-[#FF5733]/90 text-white px-6 py-4 text-lg font-medium rounded-md transition-all duration-300 flex items-center gap-2 mx-auto capitalize cursor-pointer'>
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
