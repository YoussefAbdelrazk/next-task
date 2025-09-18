'use client';

import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface FixedBottomIconProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function FixedBottomIcon({ className = '' }: FixedBottomIconProps) {
  return (
    <div className='fixed md:bottom-16 md:right-20 bottom-6 right-6 z-50'>
      <Button
        className={`
           w-14 h-14 rounded shadow-lg hover:shadow-xl
           bg-gradient-to-r from-[#6D1945] to-[#7D305E]
           transition-all duration-300 ease-in-out
           hover:scale-110 active:scale-95 cursor-pointer
           ${className}
          `}
        aria-label='Fixed bottom action'
      >
        {<RefreshCw className='w-8 h-8' />}
      </Button>
    </div>
  );
}
