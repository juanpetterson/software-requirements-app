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
  ErrorMessage,
} from './Login.styles';

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const { login, error, clearError } = useAuth();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    clearError();

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
        <ErrorMessage>{error}</ErrorMessage>
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
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
