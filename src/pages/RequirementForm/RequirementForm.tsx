import * as React from 'react';
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

export interface IRequirementFormProps {
  projectId: string;
  requirementId: string;
}

export function RequirementForm({
  projectId,
  requirementId,
}: IRequirementFormProps) {
  const [selectedValue, setSelectedValue] = React.useState('functional');
  const [state, setState] = React.useState({
    priority: '',
    complexity: '',
  });

  const handleChange = (event: any) => {
    const name = event?.target?.name;
    setState({
      ...state,
      [name]: event?.target?.value,
    });
  };

  const handleChangeRadio = (event: any) => {
    setSelectedValue(event.target.value);
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
            value={selectedValue}
            onChange={handleChangeRadio}
          >
            <FormControlLabel
              value="functional"
              control={<Radio color="primary" />}
              label="Funcional"
            />
            <FormControlLabel
              value="not-functional"
              control={<Radio color="primary" />}
              label="Não Funcional"
            />
          </RadioGroup>
        </div>
      </Container>
      <FormFooter />
    </Wrapper>
  );
}
