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
} from './ProjectForm.styles';

export interface IProjectFormProps {}

export function ProjectForm(props: IProjectFormProps) {
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
        <Header>Cadastro de projeto de software</Header>
        <InputContainer>
          <label htmlFor="name">Nome do projeto</label>
          <InputField id="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="area">Área de atuação</label>
          <InputField id="area" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="port">Porte</label>
          <InputField id="port" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="targets">Dispositivo alvo</label>
          <InputField id="targets" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="observations">Observações</label>
          <TextField style={{ width: '350px' }} id="observations" rows={6} />
        </InputContainer>
      </Container>
      <FormFooter />
    </Wrapper>
  );
}
