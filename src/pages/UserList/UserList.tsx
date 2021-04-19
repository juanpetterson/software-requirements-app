import React, { useEffect, useState, createRef } from 'react';
import { useLocation } from 'wouter';
import Pdf from 'react-to-pdf';

import IUser from '../../models/user';
import { getUsers, deleteUser } from '../../services/userService';

import { Button, ButtonsContainer } from './UserList.styles';
import { useAuth } from '../../hooks/useAuth';

export interface IUserListProps {}

export function UserList(props: IUserListProps) {
  const ref = createRef<HTMLTableElement>();
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
      setLocation(`/user/${id}/edit`);
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
      <ButtonsContainer>
        <Pdf targetRef={ref} filename="lista-de-usuarios.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Gerar PDF</Button>}
        </Pdf>
      </ButtonsContainer>
      <table className="min-w-full divide-y divide-gray-200" ref={ref}>
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
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    disabled={!loggedUser?.isAdmin}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
