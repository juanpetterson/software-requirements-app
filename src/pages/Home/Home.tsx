import React, { useState, useEffect } from 'react';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

import { Container, Header, Content } from './Home.styles';

import { getProjects } from '../../services/projectService';
import IProject from '../../models/project';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data: loadProjects } = await getProjects();

    setProjects(loadProjects);
  };

  return (
    <Container>
      <Header>Projetos de software</Header>
      <Content>
        {projects &&
          projects.map(project => (
            <ProjectCard
              key={project._id}
              title={project.name}
              projectId={project._id}
            />
          ))}
      </Content>
    </Container>
  );
}
