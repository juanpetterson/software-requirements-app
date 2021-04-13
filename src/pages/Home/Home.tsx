import React, { useState, useEffect } from 'react';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

import { Container } from './Home.styles';

import { getProjects, deleteProject } from '../../services/projectService';
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
      {projects &&
        projects.map(project => (
          <ProjectCard title={project.name} projectId={project._id} />
        ))}
    </Container>
  );
}
