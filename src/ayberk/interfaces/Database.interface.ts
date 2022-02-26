export interface IInstance {
  name: string;
  instance: any;
}

export interface IDatabase {
  instances: IInstance[];
  connect(name: string, uri: string, options?: object): any;
}
