import App from './app';
import validateEnv from './utils/EnvValidator';

// Controllers
import AuthController from './modules/auth/Auth.controller';

// Services
import AuthService from './modules/auth/Auth.service';

// Validate the env variables: Ensure all the params are passed
validateEnv();

// Prod setup
const app = new App(
  [
    new AuthController(AuthService),
  ]
);

/**
 * For testing, you can pass the test service instance as the argument of controller
 * Example:
 * const app = new App(
 * [
 *   new AuthController(AuthService),
 * ]
 * );
 */
app.listen();
