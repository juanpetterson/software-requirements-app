import { styled } from '../../stitches.config';

import TextField from '@material-ui/core/TextField';

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
});

export const InputField = styled(TextField, {
  backgroundColor: '$textColor',
});
