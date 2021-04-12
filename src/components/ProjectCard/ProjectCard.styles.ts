import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  margin: '10px',
  border: '1px solid lightgray',
  borderRadius: '5px',
  maxWidth: '280px',
  width: '100%',
  height: '140px',
});

export const Title = styled('div', {});

export const Buttons = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const Button = styled('button', {
  padding: '10px',
  margin: '5px',
  border: 'none',
  outline: 'none',

  variants: {
    color: {
      primary: {
        backgroundColor: 'blue',
      },
      red: {
        backgroundColor: 'red',
      },
      green: {
        backgroundColor: 'green',
      },
    },
  },
});
