import React, { useState } from 'react';
import { Link } from 'wouter';
import { useAuth } from '../../hooks/useAuth';

import {
  Wrapper,
  Container,
  Header,
  InputContainer,
  InputField,
  Button,
  LoginContainer,
} from './Login.styles';

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const { login } = useAuth();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const name = event?.target?.name;
    setState({
      ...state,
      [name]: event?.target?.value,
    });
  };

  const handleLogin = () => {
    login(state.email, state.password);
  };

  return (
    <Wrapper>
      <Container>
        <Header>Entrar</Header>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <InputField
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha</label>
          <InputField
            id="password"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </InputContainer>
        <LoginContainer>
          <Button
            style={{ marginBottom: '15px' }}
            color="primary"
            size="full"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          {/* <span style={{ marginBottom: '15px' }}>Ou</span>
          <strong>
            <Link style={{ textDecoration: 'none' }} to="/users">
              Registrar-se
            </Link>
          </strong> */}
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
