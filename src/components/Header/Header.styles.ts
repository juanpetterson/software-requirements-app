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
});

export const NavDropMenu = styled('div', {
  position: 'relative',
  display: 'inline-block',
  '&:hover .dropdown-content': {
    display: 'block',
  },
  '&:hover .dropdown-menu-item ': {
    backgroundColor: '#3e8e41',
  },
});

export const NavDropMenuItem = styled('button', {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '16px',
  fontSize: '16px',
  border: 'none',
  outline: 'none',
});

export const NavDropMenuContent = styled('div', {
  display: 'none',
  position: 'absolute',
  backgroundColor: '#f1f1f1',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: '1',

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
