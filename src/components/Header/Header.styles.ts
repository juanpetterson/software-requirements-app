import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  height: '4rem',
  padding: '1rem',
  backgroundColor: '$primary',
  alignItems: 'center',
  color: '$primary',
});

export const ToggleThemeButton = styled('button', {
  height: '2rem',
  fontSize: '1.4rem',
  padding: '0 10px',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const Brand = styled('span', {
  whiteSpace: 'nowrap',
  marginRight: '30px',
});

export const NavContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const NavBar = styled('ul', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const NavDropMenu = styled('div', {
  position: 'relative',
  display: 'inline-block',
  '&:hover .dropdown-content': {
    display: 'block',
  },
  '&:hover .dropdown-menu-item ': {
    backgroundColor: '#B9B7BD',
  },
});

export const NavDropMenuItem = styled('button', {
  backgroundColor: '#EEEDE7',
  color: 'black',
  padding: '16px',
  fontSize: '16px',
  border: 'none',
  outline: 'none',
  width: '100px',

  variants: {
    size: {
      small: {
        width: '70px',
      },
    },
  },
});

export const NavDropMenuContent = styled('div', {
  display: 'none',
  position: 'absolute',
  backgroundColor: '#f1f1f1',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: '1',

  variants: {
    size: {
      small: {
        minWidth: '80px',
      },
    },
  },

  '&:hover .link:hover': {
    display: 'block',
  },
  '.link': {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  },
});

export const Button = styled('button', {
  outline: 'none',
  border: 'none',
  backgroundColor: '#f1f1f1',
  color: 'black',
  padding: '12px 16px',
  textDecoration: 'none',
  fontSize: '16px',
});
