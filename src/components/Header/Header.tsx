import * as React from 'react';
import {
  Container,
  ToggleThemeButton,
  Brand,
  NavContainer,
  NavBar,
  NavDropMenu,
  NavDropMenuItem,
  NavDropMenuContent,
} from './Header.styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <Container>
      <Brand>
        <CustomLink url="/">
          <span style={{ color: 'white' }}>{brand}</span>
        </CustomLink>
      </Brand>
      <NavContainer>
        <NavBar>
          <NavDropMenu>
            <NavDropMenuItem className="dropdown-menu-item">
              Cadastros
            </NavDropMenuItem>
            <NavDropMenuContent className="dropdown-content">
              <CustomLink url="/software-requirements">
                Requisitos de Software
              </CustomLink>
            </NavDropMenuContent>
          </NavDropMenu>
        </NavBar>
        {/* <ToggleThemeButton onClick={toggleTheme}>
          <FontAwesomeIcon icon={faSun} />
        </ToggleThemeButton> */}
      </NavContainer>
    </Container>
  );
}

export default Header;
