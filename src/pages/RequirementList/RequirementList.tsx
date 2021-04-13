import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import IUser from '../../Models/user';

import {
  getRequirements,
  deleteRequirement,
} from '../../services/requirementService';

import { Button } from './RequirementList.styles';
import { useAuth } from '../../hooks/useAuth';
import IRequirement from '../../models/requirement';

export interface IRequirementListProps {
  projectId: string;
}

export function RequirementList({ projectId }: IRequirementListProps) {
  const { user: loggedUser } = useAuth();
  const [location, setLocation] = useLocation();
  const [requirementList, setRequirementList] = useState<IRequirement[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data: requirements } = await getRequirements(projectId);
    setRequirementList(requirements);
  };

  const handleEditRequirement = (id: string | undefined) => {
    if (id) {
      setLocation(`/user/${id}/edit`);
    }
  };

  const handleDeleteRequirement = async (id: string | undefined) => {
    if (id) {
      await deleteRequirement(id);
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
          {requirementList &&
            requirementList.map(user => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.requirement}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.observations}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
