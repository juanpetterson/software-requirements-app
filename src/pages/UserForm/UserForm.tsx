import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormFooter } from '../../components/FormFooter/FormFooter';
import IUser from '../../models/user';
import { getUser, addUser, updateUser } from '../../services/userService';

import {
  Wrapper,
  Container,
  Header,
  InputContainer,
  InputField,
  InputCheckbox,
  ErrorMessage,
} from './UserForm.styles';
import { userSchema } from './Schema';

export interface IUserFormProps {
  userId?: string;
}
interface IFormInput {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export function UserForm({ userId }: IUserFormProps) {
  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });
  const [location, setLocation] = useLocation();
  const [currentUser, setCurrentUser] = useState<IUser | null>();

  useEffect(() => {
    const loadUser = async () => {
      if (userId) {
        const { data: user } = await getUser(userId);

        setCurrentUser(user);
        populateFieldsWithUserData(user);
        return;
      }

      setCurrentUser(null);
      populateFieldsWithUserData(null);
    };

    loadUser();
  }, [userId]);

  const populateFieldsWithUserData = (user: IUser | null) => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (key !== 'password') {
          setValue(key as any, value);
        }
      });
      return;
    }

    reset({ email: '', name: '' });
  };

  const handleConfirm = async (data: IFormInput) => {
    const user: IUser = {
      ...currentUser,
      ...data,
    };

    const action = userId ? updateUser : addUser;
    await action(user);
    setLocation('/user/list');
  };
  const handleCancel = () => {
    setLocation(userId ? '/user/list' : '/');
  };

  return (
    <Wrapper>
      <Container>
        <Header>{userId ? 'Edição' : 'Cadastro'} de usuário</Header>
        <Controller
          name="name"
          control={control}
          defaultValue={currentUser?.name || ''}
          render={props => (
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <InputField
                id="name"
                onChange={e => props.field.onChange(e.target.value)}
                value={props.field.value}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </InputContainer>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={currentUser?.email || ''}
          render={props => (
            <InputContainer>
              <label htmlFor="email">Email</label>
              <InputField
                id="email"
                onChange={e => props.field.onChange(e.target.value)}
                value={props.field.value}
              />
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
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
                <ErrorMessage>{errors?.password?.message}</ErrorMessage>
              </InputContainer>
            )}
          />
        )}
        <Controller
          name="isAdmin"
          control={control}
          defaultValue={currentUser?.isAdmin || false}
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
