export const Layout = {
  sidebarWidth: '225px',
  sidebarWidthClosed: '50px',
  headerHeight: '60px',
};

export const Colors = {
  primary: '#0E4B82',
  white: '#FFFFFF',
  black: '#000000',
  background: {
    primary: '#8D8D8D',
    secondary: '#F5F5F5',
    hover: 'rgba(14, 75, 130, 0.12)',
  },
  status: {
    positive: '#1CC861',
  },
  lightGray: 'rgba(219, 219, 219, 0.7)',
  gray: '#8C8C8C',
  foreground: {
    primary: '#0E4B82',
    primaryBlack: '#333333',
    secondaryLight: '#DBDBDB',
    hover: '#0E4B82',
  },
  shadows: {
    tiny: '0px 4px 5px rgba(0, 0, 0, 0.05)',
    default: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export const Spacing = {
  extraSmall: '0.5rem',
  small: '0.75rem',
  default: '1rem',
  large: '1.5rem',
  extraLarge: '2rem',
  custom: (remSpacing: number) => `${remSpacing}rem`,
};

export const Fonts = {
  Sizes: {
    extraSmall: '12px',
    small: '14px',
    regular: '16px',
    large: '18px',
    extraLarge: '24px',
    custom: (fontHeight: number) => `${fontHeight}px`,
  },
  Weights: {
    bold: '600',
    semiBold: '500',
  },
};
