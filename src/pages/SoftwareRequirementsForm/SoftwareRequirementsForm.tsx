import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
} from './SoftwareRequirementsForm.styles';

export interface ISoftwareRequirementsFormProps {}

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: 200,
    backgroundColor: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function SoftwareRequirementsForm(
  props: ISoftwareRequirementsFormProps,
) {
  const classes = useStyles();
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
        <Header>Cadastro de requisítos de sóftware</Header>
        <InputContainer>
          <InputField id="filled-basic" label="Código" variant="filled" />
        </InputContainer>
        <InputContainer>
          <InputField id="filled-basic" label="Requisito" variant="filled" />
        </InputContainer>
        <InputContainer>
          <InputField
            style={{ width: '350px' }}
            id="filled-basic"
            label="Descrição"
            variant="filled"
            multiline
            rows={4}
          />
        </InputContainer>
        <InputContainer>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Prioridade
            </InputLabel>
            <Select
              native
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={state.priority}
              onChange={handleChange}
            >
              <option style={{ color: 'black' }} value={10}>
                Prioridade Alta
              </option>
              <option style={{ color: 'black' }} value={20}>
                Prioridade Média
              </option>
              <option style={{ color: 'black' }} value={30}>
                Prioridade Baixa
              </option>
            </Select>
          </FormControl>
        </InputContainer>
        <InputContainer>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Complexidade
            </InputLabel>
            <Select
              native
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={state.complexity}
              onChange={handleChange}
            >
              <option style={{ color: 'black' }} value={10}>
                Complexidade Alta
              </option>
              <option style={{ color: 'black' }} value={20}>
                Complexidade Média
              </option>
              <option style={{ color: 'black' }} value={30}>
                Complexidade Baixa
              </option>
            </Select>
          </FormControl>
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
