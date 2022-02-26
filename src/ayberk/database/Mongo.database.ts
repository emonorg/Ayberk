import Mongoose from 'mongoose';
import {IDatabase, IInstance} from '../interfaces/Database.interface';
import Logger from '../Logger';

export default class MongoHandler implements IDatabase {
  public instances: IInstance[] = [];

  constructor(name: string = 'default' , uri: string, options?: object) {
    Logger.info('Connecting to MongoDB instance...');
    this.connect(name, uri, options);
  }

  // Connect to mongo instance and add it to the registry array
  public async connect(name: string, uri: string, options?: object): Promise<void> {
    const instance = await Mongoose.connect(uri, options);
    this.instances.push({
      name,
      instance,
    });
    Logger.success('Mongo connected successfully!');
  }

  // returns the instance based on the name of instance
  public getInstance(name: string = 'default'): object {
    return this.instances.find(instance => instance.name === name);
  }
}
