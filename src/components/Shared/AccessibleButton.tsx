import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ARIA_LABELS, KEYBOARD_KEYS } from '@/lib/utils/accessibility';
import { ReactNode, forwardRef } from 'react';

interface AccessibleButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'fixed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  role?: string;
  tabIndex?: number;
  autoFocus?: boolean;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      onClick,
      disabled = false,
      type = 'button',
      ariaLabel,
      ariaDescribedBy,
      ariaExpanded,
      ariaControls,
      role,
      tabIndex,
      autoFocus = false,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      // Handle keyboard navigation
      if (onKeyDown) {
        onKeyDown(event);
      }

      // Handle space and enter keys for button activation
      if (event.key === KEYBOARD_KEYS.SPACE || event.key === KEYBOARD_KEYS.ENTER) {
        event.preventDefault();
        if (onClick && !disabled) {
          onClick();
        }
      }
    };

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    };

    const variantClasses = {
      primary: 'bg-[#EB5A3C] hover:bg-[#FF5733]/90 text-white',
      secondary: 'bg-[#91B9B4] hover:bg-[#91B9B4]/90 text-white',
      outline: 'border-2 border-[#EB5A3C] text-[#EB5A3C] hover:bg-[#EB5A3C] hover:text-white',
      ghost: 'text-[#EB5A3C] hover:bg-[#EB5A3C]/10',
      fixed:
        'w-14 h-14 rounded shadow-lg hover:shadow-xl bg-gradient-to-r from-[#6D1945] to-[#7D305E]',
    };

    return (
      <Button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        role={role}
        aria-label={ariaLabel || ARIA_LABELS.primaryAction}
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        onKeyDown={handleKeyDown}
        className={cn(
          'transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EB5A3C]',
          variantClasses[variant],
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

AccessibleButton.displayName = 'AccessibleButton';

export default AccessibleButton;
