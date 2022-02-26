import App from './app';
import validateEnv from './ayberk/EnvValidator';

// Databases
import MongoHandler from './ayberk/database/Mongo.database';

// Controllers
import AppController from './modules/app/app.controller';

// Services
import AppService from './modules/app/app.service';

// Validate the env variables: Ensure all the params are passed
validateEnv();

// Prod setup
const app = new App(
  [
    new AppController(new AppService()),
  ],
  // Name the instance that you are connecting to be accessible later, while using
  new MongoHandler('default', process.env.MONGO_URI)
);

app.listen();
