import { createCss } from '@stitches/react';

export const { styled, css, global, theme } = createCss({
  theme: {
    colors: {
      primary: '#282828',
      secondary: '#ff6e40',
      textColor: 'rgba(255, 255, 255, 1)',
      background: 'black',
      foreground: 'white',
    },
  },
});

export const lightTheme = theme('light-theme', {
  colors: {
    primary: '#ff6e40',
    secondary: '#689f38',
    textColor: 'rgba(0, 0, 0, 0.87)',
    background: 'white',
    foreground: 'black',
  },
});

export const darkTheme = theme('dark-theme', {
  colors: {
    primary: '#689f38',
    secondary: '#ff6e40',
    textColor: 'rgba(255, 255, 255, 1)',
    background: 'black',
    foreground: 'white',
  },
});

export const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
  },
});
