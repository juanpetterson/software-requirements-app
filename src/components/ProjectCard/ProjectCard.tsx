import React from 'react';

import { Container, Title, Buttons, Button } from './ProjectCard.styles';

export interface IProjectCardProps {}

export function ProjectCard(props: IProjectCardProps) {
  return (
    <Container>
      <Title>Project Card</Title>
      <Buttons>
        <Button color="primary">Editar</Button>
        <Button color="red">Excluir</Button>
        <Button color="green">Requisíto</Button>
      </Buttons>
    </Container>
  );
}
