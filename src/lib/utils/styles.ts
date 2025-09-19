import { cn } from '@/lib/utils';

// Common button styles to eliminate repetition
export const buttonStyles = {
  primary:
    'bg-[#EB5A3C] hover:bg-[#FF5733]/90 text-white px-6 py-4 text-lg font-medium rounded-md transition-all duration-300 capitalize cursor-pointer',
  secondary:
    'bg-[#91B9B4] hover:bg-[#91B9B4]/90 text-white px-6 py-4 text-lg font-medium rounded-md transition-all duration-300 capitalize cursor-pointer',
  outline:
    'border-2 border-[#EB5A3C] text-[#EB5A3C] hover:bg-[#EB5A3C] hover:text-white px-4 py-2 transition-all duration-300',
  ghost: 'text-[#EB5A3C] hover:bg-[#EB5A3C]/10 px-4 py-2 transition-all duration-300',
  fixed:
    'w-14 h-14 rounded shadow-lg hover:shadow-xl bg-gradient-to-r from-[#6D1945] to-[#7D305E] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer',
} as const;

// Common input styles
export const inputStyles = {
  default: 'border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]',
  textarea: 'min-h-[200px] border-2 border-[#D9D9D9] placeholder:text-[#767676]',
  error: 'border-2 border-[#B41932] text-[#B41932]',
} as const;

// Common text styles
export const textStyles = {
  heading: 'text-2xl font-bold text-[#0F2837]',
  subheading: 'text-lg font-medium text-[#7D305E]',
  body: 'text-[#767676]',
  caption: 'text-sm text-[#767676]',
  accent: 'text-[#EB5A3C]',
} as const;

// Common layout styles
export const layoutStyles = {
  container: 'max-w-[1328px] mx-auto px-4',
  section: 'py-12 md:py-16',
  card: 'bg-white rounded-lg shadow-sm border border-[#D9D9D9]',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
} as const;

// Common spacing utilities
export const spacingStyles = {
  sectionPadding: 'py-12 md:py-16',
  containerPadding: 'px-4 md:px-6 lg:px-8',
  cardPadding: 'p-6',
} as const;

// Utility function to combine styles
export const combineStyles = (...styles: (string | undefined)[]) => {
  return cn(...styles.filter(Boolean));
};
