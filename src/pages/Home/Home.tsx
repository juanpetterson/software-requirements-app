import React from 'react';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

import { Container } from './Home.styles';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <Container>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Container>
  );
}
