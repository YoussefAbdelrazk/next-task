// Accessibility utilities for better user experience

export const ARIA_LABELS = {
  // Navigation
  mainNavigation: 'Main navigation',
  mobileMenuToggle: 'Toggle mobile menu',
  closeMobileMenu: 'Close mobile menu',

  // Buttons
  primaryAction: 'Primary action button',
  secondaryAction: 'Secondary action button',
  closeDialog: 'Close dialog',
  openDialog: 'Open dialog',

  // Forms
  requiredField: 'Required field',
  optionalField: 'Optional field',
  formError: 'Form validation error',
  formSuccess: 'Form submission successful',

  // Content
  loadingContent: 'Content is loading',
  errorContent: 'Error loading content',
  imageDescription: 'Image description',

  // Interactive elements
  expandContent: 'Expand content',
  collapseContent: 'Collapse content',
  selectOption: 'Select option',
  removeItem: 'Remove item',
  addItem: 'Add item',
} as const;

export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === KEYBOARD_KEYS.TAB) {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => element.removeEventListener('keydown', handleTabKey);
  },

  // Move focus to next focusable element
  moveToNext: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  moveToPrevious: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
  },
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden');
  },
};

// Color contrast utilities
export const colorContrast = {
  // Check if color combination meets WCAG standards
  getContrastRatio: (color1: string, color2: string): number => {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd use a proper color contrast library
    console.log('Calculating contrast ratio for:', color1, 'and', color2);
    return 4.5; // Placeholder - should be calculated properly
  },

  // Get accessible text color for background
  getAccessibleTextColor: (backgroundColor: string): string => {
    // Simplified logic - in reality, you'd calculate based on luminance
    return backgroundColor === '#ffffff' ? '#000000' : '#ffffff';
  },
};

// Animation preferences
export const motionPreferences = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get appropriate animation duration based on user preference
  getAnimationDuration: (defaultDuration: number): number => {
    return motionPreferences.prefersReducedMotion() ? 0 : defaultDuration;
  },
};
