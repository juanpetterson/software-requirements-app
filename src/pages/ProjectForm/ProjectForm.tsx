import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import { FormFooter } from '../../components/FormFooter/FormFooter';
import IProject from '../../models/project';
import {
  getProject,
  addProject,
  updateProject,
} from '../../services/projectService';

import {
  Wrapper,
  Container,
  Header,
  InputContainer,
  InputField,
  TextField,
} from './ProjectForm.styles';

export interface IProjectFormProps {
  projectId?: string;
}

export function ProjectForm({ projectId }: IProjectFormProps) {
  const [location, setLocation] = useLocation();
  const [currentProject, setCurrentProject] = useState<IProject>();
  const [state, setState] = useState<Partial<IProject>>({
    name: '',
    area: '',
    port: '',
    targets: '',
    observations: '',
  });

  useEffect(() => {
    const loadProject = async () => {
      if (projectId) {
        const { data: project } = await getProject(projectId);

        setCurrentProject(project);
        populateFieldsWithProjectData(project);
      }
    };

    loadProject();
  }, []);

  const handleChange = (event: any) => {
    const name = event?.target?.name;
    setState({
      ...state,
      [name]: event?.target?.value,
    });
  };

  const populateFieldsWithProjectData = ({
    name,
    area,
    port,
    targets,
    observations,
  }: IProject) => {
    setState({
      ...state,
      name,
      area,
      port,
      targets,
      observations,
    });
  };

  const handleConfirm = async () => {
    const project = {
      ...currentProject,
      ...state,
    } as IProject;

    const action = projectId ? updateProject : addProject;
    await action(project);
    setLocation('/');
  };

  const handleCancel = () => {
    setLocation('/');
  };

  return (
    <Wrapper>
      <Container>
        <Header>Cadastro de projeto de software</Header>
        <InputContainer>
          <label htmlFor="name">Nome do projeto</label>
          <InputField
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="area">Área de atuação</label>
          <InputField
            id="area"
            name="area"
            value={state.area}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="port">Porte</label>
          <InputField
            id="port"
            name="port"
            value={state.port}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="targets">Dispositivo alvo</label>
          <InputField
            id="targets"
            name="targets"
            value={state.targets}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="observations">Observações</label>
          <TextField
            style={{ width: '350px' }}
            id="observations"
            name="observations"
            rows={6}
            value={state.observations}
            onChange={handleChange}
          />
        </InputContainer>
      </Container>
      <FormFooter
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        isEdit={!!projectId}
      />
    </Wrapper>
  );
}
