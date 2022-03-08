export const size = {
    sm: '320px',
    md: '768px',
    lg: '1280px',
  } as const;
  
  export const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
  } as const;
  
  export const deviceDesktopFirst = {
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
  } as const;