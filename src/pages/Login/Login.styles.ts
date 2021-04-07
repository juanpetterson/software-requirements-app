import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {
  height: 'calc(100vh - 125px)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const Container = styled('div', {
  paddingBottom: '120px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '350px',
  width: '100%',
});

export const Header = styled('div', {
  marginBottom: '30px',
  fontSize: '1.2rem',
});

export const InputContainer = styled('div', {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
});

export const LoginContainer = styled('div', {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InputField = styled('input', {
  backgroundColor: '$textColor',
  padding: '10px',
  outline: 'none',
  border: '1px solid gray',
  width: '100%',
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
    size: {
      full: {
        width: '100%',
      },
    },
  },
});

export const ErrorMessage = styled('span', {
  color: 'red',
  marginBottom: '10px',
});
