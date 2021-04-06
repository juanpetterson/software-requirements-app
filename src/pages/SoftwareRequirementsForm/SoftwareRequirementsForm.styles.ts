import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {
  height: 'calc(100vh - 125px)',
  position: 'relative',
});

export const Container = styled('div', {
  paddingBottom: '120px',
});

export const Header = styled('div', {
  marginBottom: '30px',
});

export const InputContainer = styled('div', {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
});

export const InputField = styled('input', {
  backgroundColor: '$textColor',
  padding: '10px',
  outline: 'none',
  border: '1px solid gray',
  width: '200px',
});

export const SelectField = styled('select', {
  backgroundColor: '$textColor',
  padding: '10px',
  outline: 'none',
  border: '1px solid gray',
  width: '200px',
});

export const TextField = styled('textarea', {
  backgroundColor: '$textColor',
  padding: '10px',
  outline: 'none',
  border: '1px solid gray',
  width: '200px',
  resize: 'none',
});

export const Button = styled('button', {
  padding: '10px',
  border: 'none',
  outline: 'none',

  variant: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      default: {
        backgroundColor: 'gray',
      },
    },
  },
});
