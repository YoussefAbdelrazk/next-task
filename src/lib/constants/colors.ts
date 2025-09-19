// Color constants to eliminate repetition and ensure consistency
export const COLORS = {
  // Primary colors
  primary: {
    orange: '#EB5A3C',
    orangeHover: '#FF5733',
    orangeLight: '#FF5733/90',
  },

  // Secondary colors
  secondary: {
    purple: '#7D305E',
    purpleLight: '#F8F2F5',
    purpleDark: '#6D1945',
    teal: '#91B9B4',
    tealLight: '#71908C',
    tealDark: '#0F2837',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    lightGray: '#FBFBFB',
    gray: '#767676',
    darkGray: '#74828B',
    borderGray: '#D9D9D9',
    lightBorder: '#E7EAEB',
    cardGray: '#F4F4F4',
  },

  // Status colors
  status: {
    error: '#B41932',
    success: '#71908C',
    warning: '#FF9619',
  },

  // Background colors
  background: {
    light: '#FBFBFB',
    card: '#F4F4F4',
    accent: '#FDEFEC',
    orange: '#FDE6D5',
  },
} as const;

// Common color combinations for easy reuse
export const COLOR_COMBINATIONS = {
  primaryButton: `bg-[${COLORS.primary.orange}] hover:bg-[${COLORS.primary.orangeLight}]`,
  secondaryButton: `bg-[${COLORS.secondary.teal}] hover:bg-[${COLORS.secondary.teal}]/90`,
  purpleButton: `bg-[${COLORS.secondary.purple}] hover:bg-[${COLORS.secondary.purple}]/90`,
  textPrimary: `text-[${COLORS.secondary.purpleDark}]`,
  textSecondary: `text-[${COLORS.neutral.gray}]`,
  textAccent: `text-[${COLORS.primary.orange}]`,
  borderDefault: `border-[${COLORS.neutral.borderGray}]`,
  backgroundCard: `bg-[${COLORS.background.card}]`,
} as const;
