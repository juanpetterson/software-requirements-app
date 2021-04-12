import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '4rem',
  padding: '0 20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'white',
});

export const Button = styled('button', {
  padding: '15px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  variants: {
    color: {
      primary: {
        backgroundColor: '#0E86D4',
        color: 'white',
      },
      default: {
        backgroundColor: 'lightgray',
      },
    },
  },
});
