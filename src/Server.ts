import App from './app';
import validateEnv from './utils/EnvValidator';

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
  ]
);

app.listen();
