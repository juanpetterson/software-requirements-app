import React, { useEffect, useState, createRef } from 'react';
import { useLocation } from 'wouter';
import Pdf from 'react-to-pdf';

import {
  getRequirements,
  deleteRequirement,
} from '../../services/requirementService';

import { ButtonsContainer, Button } from './RequirementList.styles';
import { useAuth } from '../../hooks/useAuth';
import IRequirement from '../../models/requirement';

export interface IRequirementListProps {
  projectId: string;
}

export function RequirementList({ projectId }: IRequirementListProps) {
  const ref = createRef<HTMLTableElement>();
  const { user: loggedUser } = useAuth();
  const [location, setLocation] = useLocation();
  const [requirementList, setRequirementList] = useState<IRequirement[]>([]);

  useEffect(() => {
    loadRequirements();
  }, []);

  const loadRequirements = async () => {
    const { data: requirements } = await getRequirements(projectId);

    console.log(requirements);

    const requirementsList: IRequirement[] = [];

    requirements.forEach(requirement => {
      if (
        !requirementsList.some(
          (req: IRequirement) => req.code === requirement.code,
        )
      ) {
        requirementsList.push(requirement);
      }
    });

    requirementsList.sort((a, b) => (a.code > b.code ? 1 : -1));

    setRequirementList(requirementsList);
  };

  const handleEditRequirement = (id: string | undefined) => {
    if (id) {
      setLocation(`/project/${projectId}/requirement/${id}/edit`);
    }
  };

  const handleDeleteRequirement = async (id: string | undefined) => {
    if (id) {
      await deleteRequirement(id);
      loadRequirements();
    }
  };

  const handleAddRequirement = () => {
    setLocation(`/project/${projectId}/requirement/add`);
  };

  return (
    <>
      <div
        className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        style={{ overflow: 'auto' }}
      >
        <ButtonsContainer>
          <Button onClick={handleAddRequirement}>Adicionar requisíto</Button>
          <Pdf targetRef={ref} filename="lista-de-requisitos.pdf">
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
                Código
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Requisíto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Versionamento
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
              requirementList.map(requirement => (
                <tr key={requirement._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {requirement.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {requirement.requirement}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {requirement.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {requirement.versioning}
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
                      onClick={() => handleEditRequirement(requirement._id)}
                      disabled={!loggedUser?.isAdmin}
                    >
                      Versionar
                    </Button>
                    <Button
                      onClick={() => handleDeleteRequirement(requirement._id)}
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
    </>
  );
}
