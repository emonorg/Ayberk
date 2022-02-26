import Mongoose from 'mongoose';
import Logger from '../utils/ayberk/Logger';

export default class MongoHandler {

  private static async connect(): Promise<void> {
    await Mongoose.connect(process.env.MONGO_URI);
    Logger.success('Mongo connected successfully!');
  }

  constructor() {
    Logger.info('Connecting to MongoDB instance...');
    MongoHandler.connect();
  }
}
