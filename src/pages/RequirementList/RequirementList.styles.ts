import { styled } from '../../stitches.config';

export const Button = styled('button', {
  padding: '5px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '#487eb0',
  color: 'white',

  '&:hover': {
    background: '#40739e',
  },
  '&:disabled': {
    background: 'gray',
    cursor: 'not-allowed',
  },
});

export const TrHead = styled('tr', {
  background: '#535c68',
  color: 'white',
});

export const Tr = styled('tr', {
  background: '#f5f6fa',

  '&:hover': {
    background: '#dcdde1',
  },
});

export const Th = styled('th', {
  padding: '5px',
});

export const Td = styled('td', {
  padding: '5px',
});

export const ButtonsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});
