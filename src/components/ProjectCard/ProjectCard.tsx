import React from 'react';
import { useLocation } from 'wouter';
import { deleteProject } from '../../services/projectService';

import { Container, Title, Buttons, Button } from './ProjectCard.styles';

export interface IProjectCardProps {
  title: string;
  projectId: string | undefined;
}

export function ProjectCard({ title, projectId }: IProjectCardProps) {
  const [location, setLocation] = useLocation();

  const handleEditProject = () => {
    setLocation(`/project/${projectId}/edit`);
  };
  const handleDeleteProject = () => {
    if (projectId) {
      deleteProject(projectId);
    }
  };
  const handleProjectRequirements = () => {
    setLocation(`/project/${projectId}/requirement`);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Buttons>
        <Button color="primary" onClick={handleEditProject}>
          Editar
        </Button>
        <Button color="red" onClick={handleDeleteProject}>
          Excluir
        </Button>
        <Button color="green" onClick={handleProjectRequirements}>
          Requisítos
        </Button>
      </Buttons>
    </Container>
  );
}
