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
  requirementId?: string;
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
    versioning: 1,
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
    versioning,
  }: IRequirement) => {
    setState({
      ...state,
      code,
      requirement,
      description,
      complexity,
      priority,
      type,
      versioning: versioning + 1,
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
          <InputField
            id="code"
            name="code"
            value={state.code}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirement">Requisito</label>
          <InputField
            id="requirement"
            name="requirement"
            value={state.requirement}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Descrição</label>
          <TextField
            style={{ width: '350px' }}
            id="description"
            rows={6}
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <SelectField
            id="priority"
            name="priority"
            value={state.priority}
            onChange={handleChange}
          >
            <option style={{ color: 'black' }} value="high">
              Prioridade Alta
            </option>
            <option style={{ color: 'black' }} value="medium">
              Prioridade Média
            </option>
            <option style={{ color: 'black' }} value="small">
              Prioridade Baixa
            </option>
          </SelectField>
        </InputContainer>
        <InputContainer>
          <SelectField
            id="complexity"
            name="complexity"
            value={state.complexity}
            onChange={handleChange}
          >
            <option style={{ color: 'black' }} value="high">
              Complexidade Alta
            </option>
            <option style={{ color: 'black' }} value="medium">
              Complexidade Média
            </option>
            <option style={{ color: 'black' }} value="small">
              Complexidade Baixa
            </option>
          </SelectField>
        </InputContainer>
        <div>
          <RadioGroup
            style={{ display: 'flex', flexDirection: 'row' }}
            id="type"
            name="type"
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
        <InputContainer>
          <label htmlFor="versioning">Versionamento</label>
          <InputField
            id="versioning"
            name="versioning"
            value={state.versioning}
            onChange={handleChange}
            disabled
            style={{
              backgroundColor: 'lightgray',
              color: 'gray',
              borderColor: 'gray',
            }}
          />
        </InputContainer>
      </Container>
      <FormFooter
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        isEdit={!!requirementId}
      />
    </Wrapper>
  );
}
