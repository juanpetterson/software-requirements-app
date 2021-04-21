import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useForm, Controller } from 'react-hook-form';

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

interface IFormInput {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export function UserForm({ userId }: IUserFormProps) {
  const { handleSubmit, setValue, control } = useForm<IFormInput>();
  const [location, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<IUser>();

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
    Object.entries(user).forEach(([key, value]) => {
      if (key !== 'password') {
        setValue(key as any, value);
      }
    });
  };

  const handleConfirm = async (data: IFormInput) => {
    const action = userId ? updateUser : addUser;
    await action(data);
    setLocation('/user/list');
  };
  const handleCancel = () => {
    setLocation(userId ? '/user/list' : '/');
  };

  return (
    <Wrapper>
      <Container>
        <Header>Cadastro de usuário</Header>
        <Controller
          name="name"
          control={control}
          render={props => (
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <InputField
                id="name"
                onChange={e => props.field.onChange(e.target.value)}
                value={props.field.value}
              />
            </InputContainer>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={props => (
            <InputContainer>
              <label htmlFor="email">Email</label>
              <InputField
                id="email"
                onChange={e => props.field.onChange(e.target.value)}
                value={props.field.value}
              />
            </InputContainer>
          )}
        />

        {!userId && (
          <Controller
            name="password"
            control={control}
            render={props => (
              <InputContainer>
                <label htmlFor="password">Senha</label>
                <InputField
                  id="password"
                  type="password"
                  onChange={e => props.field.onChange(e.target.value)}
                  value={props.field.value}
                />
              </InputContainer>
            )}
          />
        )}
        <Controller
          name="isAdmin"
          control={control}
          render={props => (
            <InputContainer>
              <label htmlFor="isAdmin">Administrador</label>
              <InputCheckbox
                id="isAdmin"
                type="checkbox"
                onChange={e => props.field.onChange(e.target.checked)}
                checked={props.field.value}
              />
            </InputContainer>
          )}
        />
      </Container>
      <FormFooter
        isEdit={!!userId}
        onConfirm={handleSubmit(handleConfirm)}
        onCancel={handleCancel}
      />
    </Wrapper>
  );
}
