import { styled } from '../../stitches.config';

export const Container = styled('div', {
  position: 'absolute',
  bottom: '0',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '4rem',
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
