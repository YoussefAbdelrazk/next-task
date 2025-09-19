import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { buttonStyles } from '@/lib/utils/styles';
import { ReactNode } from 'react';

interface CommonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'fixed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function CommonButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}: CommonButtonProps) {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonStyles[variant], sizeClasses[size], className)}
    >
      {children}
    </Button>
  );
}
