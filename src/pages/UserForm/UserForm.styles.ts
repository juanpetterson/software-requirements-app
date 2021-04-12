import { styled } from '../../stitches.config';

export const Wrapper = styled('div', {});

export const Container = styled('div', {
  height: '100%',
  marginBottom: '100px',
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

export const InputCheckbox = styled('input', {
  width: '16px',
  height: '16px',
});
