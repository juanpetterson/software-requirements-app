import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import IUser from '../../Models/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { getUsers, deleteUser } from '../../services/userService';

import { Button, Td, Th, Tr, TrHead } from './UserList.styles';
import { useAuth } from '../../hooks/useAuth';

export interface IUsersListProps {}

export function UsersList(props: IUsersListProps) {
  const { user: loggedUser } = useAuth();
  const [location, setLocation] = useLocation();
  const [usersList, setUsersList] = useState<IUser[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data: users } = await getUsers();
    setUsersList(users);
  };

  const handleEditUser = (id: string | undefined) => {
    if (id) {
      setLocation(`/users/${id}/edit`);
    }
  };

  const handleDeleteUser = async (id: string | undefined) => {
    if (id) {
      await deleteUser(id);
      loadUsers();
    }
  };

  return (
    <div>
      <table
        style={{
          width: '100%',
          maxWidth: '600px',
          border: '1px solid',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <TrHead>
            <Th style={{ border: '1px solid black' }}>Nome</Th>
            <Th style={{ border: '1px solid black' }}>Email</Th>
            <Th style={{ border: '1px solid black' }}>Administrador</Th>
            <Th style={{ border: '1px solid black' }}>Ações</Th>
          </TrHead>
        </thead>
        <tbody>
          {usersList &&
            usersList.map(user => (
              <Tr key={user._id}>
                <Td style={{ border: '1px solid' }}>{user.name}</Td>
                <Td style={{ border: '1px solid' }}>{user.email}</Td>
                <Td style={{ border: '1px solid' }}>
                  {user.isAdmin ? 'Sim' : 'Não'}
                </Td>
                <Td
                  style={{
                    border: '1px solid',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <Button
                    onClick={() => handleEditUser(user._id)}
                    disabled={!loggedUser?.isAdmin}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    disabled={!loggedUser?.isAdmin}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Td>
              </Tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
