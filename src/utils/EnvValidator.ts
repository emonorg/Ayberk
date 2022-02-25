import {
  cleanEnv, port,
} from 'envalid';

export default function validateEnv(): void {
  cleanEnv(process.env, {
    APP_PORT: port(),
  });
}
