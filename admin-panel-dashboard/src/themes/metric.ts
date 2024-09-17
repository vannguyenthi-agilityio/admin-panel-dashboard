export const screens = {
  xs: { min: "336px" },
  // => @media (min-width: 336px) { ... }

  sm: {'min': '480px'},
  // => @media (min-width: 48px) { ... }

  md: {'min': '768px'},
  // => @media (min-width: 768px { ... }

  lg: {'min': '769px', 'max': '1279px'},
  // => @media (min-width: 769px and max-width: 1279px) { ... }

  xl: {'min': '1280px', 'max': '1535px'},
  // => @media (min-width: 1280px and max-width: 1535px) { ... }

  '2xl': {'min': '1536px'},
  // => @media (min-width: 1536px) { ... }
};

export const borderRadius = {
  "small": "0.375rem",
  "default": "0.5rem",
  "full": "9999px",
  "none": "0",
};
