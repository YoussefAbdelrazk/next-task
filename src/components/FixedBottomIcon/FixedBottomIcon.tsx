'use client';

import { Button } from '@/components/ui/button';
import { ARIA_LABELS } from '@/lib/utils/accessibility';
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
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7D305E]
           ${className}
          `}
        aria-label={ARIA_LABELS.primaryAction}
        title='Refresh or reload content'
        role='button'
        tabIndex={0}
      >
        <RefreshCw className='w-8 h-8' aria-hidden='true' />
      </Button>
    </div>
  );
}
