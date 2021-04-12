export default interface IRequirement {
  _id?: string;
  type: 'FUNCTIONAL' | 'NOT_FUNCTIONAL';
  code: string;
  requirement: string;
  description: string;
  observations?: string;
  versioning: number;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}
