export default interface IRequirement {
  _id?: string;
  type: 'FUNCTIONAL' | 'NOT_FUNCTIONAL';
  code: string;
  requirement: string;
  description: string;
  priority: string;
  complexity: string;
  createdAt: Date;
  updatedAt: Date;
}
