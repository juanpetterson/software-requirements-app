import * as React from 'react';
// import Button from '@material-ui/core/Button';

import { Container, Button } from './FormFooter.styles';

export interface IFormFooterProps {
  onCancel?: () => void;
  onConfirm?: () => void;
  isEdit?: boolean;
}

export function FormFooter({
  onCancel,
  onConfirm,
  isEdit = false,
}: IFormFooterProps) {
  return (
    <Container>
      <Button color="default" onClick={onCancel}>
        Cancelar
      </Button>
      <Button color="primary" onClick={onConfirm}>
        {isEdit ? 'Atualizar' : 'Cadastrar'}
      </Button>
    </Container>
  );
}
