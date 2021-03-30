import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Container } from './FormFooter.styles';

export interface IFormFooterProps {}

export function FormFooter(props: IFormFooterProps) {
  return (
    <Container>
      <Button variant="contained" size="large" disableElevation>
        Cancelar
      </Button>
      <Button variant="contained" color="primary" size="large" disableElevation>
        Cadastrar
      </Button>
    </Container>
  );
}
