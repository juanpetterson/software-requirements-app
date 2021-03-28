import * as React from 'react';
import { Container } from './Header.styles';

export interface IHeaderProps {
  brand: string;
}

function Header ({ brand }: IHeaderProps) {
  return (
    <Container>
      <div>{brand}</div>
    </Container>
  );
}


export default Header;
