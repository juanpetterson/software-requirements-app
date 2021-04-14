import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { FormFooter } from '../../components/FormFooter/FormFooter';

import {
  Wrapper,
  Container,
  Header,
  InputContainer,
  InputField,
  SelectField,
  TextField,
} from './RequirementForm.styles';
import IRequirement from '../../models/requirement';
import {
  getRequirement,
  updateRequirement,
  addRequirement,
} from '../../services/requirementService';

export interface IRequirementFormProps {
  projectId: string;
  requirementId: string;
}

export function RequirementForm({
  projectId,
  requirementId,
}: IRequirementFormProps) {
  const [location, setLocation] = useLocation();
  const [currentRequirement, setCurrentRequirement] = useState<IRequirement>();
  const [state, setState] = useState<Partial<IRequirement>>({
    code: '',
    requirement: '',
    description: '',
    complexity: '',
    priority: '',
    type: 'FUNCTIONAL',
  });

  useEffect(() => {
    const loadRequirement = async () => {
      if (requirementId) {
        const { data: requirement } = await getRequirement(requirementId);

        setCurrentRequirement(requirement);
        populateFieldsWithRequirementData(requirement);
      }
    };

    loadRequirement();
  }, []);

  const populateFieldsWithRequirementData = ({
    code,
    requirement,
    description,
    complexity,
    priority,
    type,
  }: IRequirement) => {
    setState({
      ...state,
      code,
      requirement,
      description,
      complexity,
      priority,
      type,
    });
  };

  const handleConfirm = async () => {
    const user = {
      ...currentRequirement,
      ...state,
    } as IRequirement;

    const action = requirementId ? updateRequirement : addRequirement;
    await action(user);
    setLocation(`/project/${projectId}/requirement/list`);
  };
  const handleCancel = () => {
    setLocation(`/project/${projectId}/requirement/list`);
  };

  const handleChange = (event: any) => {
    const name = event?.target?.name;
    setState({
      ...state,
      [name]: event?.target?.value,
    });
  };

  return (
    <Wrapper>
      <Container>
        <Header>Cadastro de requisíto de software</Header>
        <InputContainer>
          <label htmlFor="code">Código</label>
          <InputField id="code" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirement">Requisito</label>
          <InputField id="requirement" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Descrição</label>
          <TextField style={{ width: '350px' }} id="description" rows={6} />
        </InputContainer>
        <InputContainer>
          <SelectField value={state.priority} onChange={handleChange}>
            <option style={{ color: 'black' }} value={10}>
              Prioridade Alta
            </option>
            <option style={{ color: 'black' }} value={20}>
              Prioridade Média
            </option>
            <option style={{ color: 'black' }} value={30}>
              Prioridade Baixa
            </option>
          </SelectField>
        </InputContainer>
        <InputContainer>
          <SelectField value={state.complexity} onChange={handleChange}>
            <option style={{ color: 'black' }} value={10}>
              Complexidade Alta
            </option>
            <option style={{ color: 'black' }} value={20}>
              Complexidade Média
            </option>
            <option style={{ color: 'black' }} value={30}>
              Complexidade Baixa
            </option>
          </SelectField>
        </InputContainer>
        <div>
          <RadioGroup
            style={{ display: 'flex', flexDirection: 'row' }}
            value={state.type}
            onChange={handleChange}
          >
            <FormControlLabel
              value="FUNCTIONAL"
              control={<Radio color="primary" />}
              label="Funcional"
            />
            <FormControlLabel
              value="NOT_FUNCTIONAL"
              control={<Radio color="primary" />}
              label="Não Funcional"
            />
          </RadioGroup>
        </div>
      </Container>
      <FormFooter onCancel={handleCancel} onConfirm={handleConfirm} />
    </Wrapper>
  );
}
