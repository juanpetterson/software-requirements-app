export default interface IProject {
  _id?: string;
  name: String;
  area?: String;
  port?: String;
  targets?: String;
  observations?: Number;
  createdAt: Date;
  updatedAt: Date;
}
