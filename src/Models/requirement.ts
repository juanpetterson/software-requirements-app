export default interface IRequirement {
  _id?: string;
  type: 'FUNCTIONAL' | 'NOT_FUNCTIONAL';
  code: string;
  requirement: string;
  description: string;
  observations: string;
  priority: string;
  complexity: string;
  versioning: number;
  createdAt: Date;
  updatedAt: Date;
}
