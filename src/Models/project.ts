export default interface IProject {
  _id?: string;
  name: string;
  area?: string;
  port?: string;
  targets?: string;
  observations?: string;
  createdAt: Date;
  updatedAt: Date;
}
