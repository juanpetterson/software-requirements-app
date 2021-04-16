import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import { FormFooter } from '../../components/FormFooter/FormFooter';
import IUser from '../../models/user';
import { getUser, addUser, updateUser } from '../../services/userService';

export interface IUserFormProps {
  userId?: string;
}

import {
  Wrapper,
  Container,
  Header,
  InputContainer,
  InputField,
  InputCheckbox,
} from './UserForm.styles';

export function UserForm({ userId }: IUserFormProps) {
  const [location, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<IUser>();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  useEffect(() => {
    const loadUser = async () => {
      if (userId) {
        const { data: user } = await getUser(userId);

        setCurrentUser(user);
        populateFieldsWithUserData(user);
      }
    };

    loadUser();
  }, []);

  const populateFieldsWithUserData = (user: IUser) => {
    setState({
      ...state,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  };

  const handleConfirm = async () => {
    const user = {
      ...currentUser,
      name: state.name,
      password: state.password,
      email: state.email,
      isAdmin: state.isAdmin,
    } as IUser;

    const action = userId ? updateUser : addUser;
    await action(user);
    setLocation('/user/list');
  };
  const handleCancel = () => {
    setLocation(userId ? '/user/list' : '/');
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
        <Header>Cadastro de usuário</Header>
        <InputContainer>
          <label htmlFor="name">Nome</label>
          <InputField
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <InputField
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </InputContainer>
        {!userId && (
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <InputField
              id="password"
              name="password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
          </InputContainer>
        )}
        <InputContainer>
          <label htmlFor="administrator-checkbox">Administrador</label>
          <InputCheckbox
            id="administrator-checkbox"
            name="isAdmin"
            type="checkbox"
            checked={state.isAdmin}
            onChange={handleChange}
          />
        </InputContainer>
      </Container>
      <FormFooter
        isEdit={!!userId}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Wrapper>
  );
}
