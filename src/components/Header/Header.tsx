import * as React from 'react';
import {
  Container,
  Brand,
  NavContainer,
  NavBar,
  NavDropMenu,
  NavDropMenuItem,
  NavDropMenuContent,
  Button,
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
        <NavBar style={{ justifyContent: user ? 'space-between' : 'flex-end' }}>
          {user && (
            <div>
              {user?.isAdmin && (
                <NavDropMenu>
                  <NavDropMenuItem
                    className="dropdown-menu-item"
                    style={{ marginRight: '20px' }}
                  >
                    Cadastros
                  </NavDropMenuItem>
                  <NavDropMenuContent className="dropdown-content">
                    <CustomLink url="/project">Projeto de Software</CustomLink>
                    <CustomLink url="/user/add">Usuários</CustomLink>
                  </NavDropMenuContent>
                </NavDropMenu>
              )}
              <NavDropMenu>
                <NavDropMenuItem className="dropdown-menu-item">
                  Listas
                </NavDropMenuItem>
                <NavDropMenuContent className="dropdown-content">
                  <CustomLink url="/user/list">Usuários</CustomLink>
                </NavDropMenuContent>
              </NavDropMenu>
            </div>
          )}
          <NavDropMenu>
            <NavDropMenuItem className="dropdown-menu-item" size="small">
              Login
            </NavDropMenuItem>
            <NavDropMenuContent size="small" className="dropdown-content">
              {user ? (
                <Button onClick={handleLogout}>Logout</Button>
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
