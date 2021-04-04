import * as React from 'react';
import {
  Container,
  Brand,
  NavContainer,
  NavBar,
  NavDropMenu,
  NavDropMenuItem,
  NavDropMenuContent,
} from './Header.styles';
import { Link, useLocation } from 'wouter';
import { useAuth } from '../../hooks/useAuth';

export interface IHeaderProps {
  brand: string;
  toggleTheme: () => void;
}

export interface ICustomLinkProps {
  url: string;
  children: any;
}

const CustomLink = ({ url, children }: ICustomLinkProps): any => (
  <Link className="link" style={{ textDecoration: 'none' }} to={url}>
    {children}
  </Link>
);

function Header({ brand, toggleTheme }: IHeaderProps) {
  const [location, setLocation] = useLocation();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  return (
    <Container>
      <Brand>
        <CustomLink url="/">
          <span
            style={{ color: 'white', padding: '10px 0', cursor: 'pointer' }}
          >
            {brand}
          </span>
        </CustomLink>
      </Brand>
      <NavContainer>
        <NavBar>
          <>
            <NavDropMenu>
              <NavDropMenuItem className="dropdown-menu-item">
                Cadastros
              </NavDropMenuItem>
              <NavDropMenuContent className="dropdown-content">
                <CustomLink url="/software-requirements">
                  Requisitos de Software
                </CustomLink>
                <CustomLink url="/users/add">Usuários</CustomLink>
              </NavDropMenuContent>
            </NavDropMenu>
            <NavDropMenu>
              <NavDropMenuItem className="dropdown-menu-item">
                Listas
              </NavDropMenuItem>
              <NavDropMenuContent className="dropdown-content">
                <CustomLink url="/users/list">Usuários</CustomLink>
              </NavDropMenuContent>
            </NavDropMenu>
          </>
          <NavDropMenu>
            <NavDropMenuItem className="dropdown-menu-item">
              Login
            </NavDropMenuItem>
            <NavDropMenuContent size="small" className="dropdown-content">
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <CustomLink url="/login">Login</CustomLink>
              )}
            </NavDropMenuContent>
          </NavDropMenu>
        </NavBar>
      </NavContainer>
    </Container>
  );
}

export default Header;
