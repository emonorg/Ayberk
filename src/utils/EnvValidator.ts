import {
  cleanEnv, port, str,
} from 'envalid';

export default function validateEnv(): void {
  cleanEnv(process.env, {
    APP_PORT: port(),
    MONGO_URI: str(),
  });
}
