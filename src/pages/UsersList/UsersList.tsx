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
    <div
      className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      style={{ overflow: 'auto' }}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nome
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Função
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {usersList &&
            usersList.map(user => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.isAdmin ? 'Administrador' : 'Usuário'}
                </td>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  <Button
                    onClick={() => handleEditUser(user._id)}
                    disabled={!loggedUser?.isAdmin}
                  >
                    Editar
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    disabled={!loggedUser?.isAdmin}
                  >
                    Excluir
                    {/* <FontAwesomeIcon icon={faTrash} /> */}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
