import 'dotenv/config';

import { createExpressServer } from 'routing-controllers';

import validateEnv from './utils/EnvValidator';
import Logger from './utils/Logger';

import MongoHandler from './database/mongo.database';

// Validate env variables
validateEnv();


// Creates express app, returns: Express app instance
const app = createExpressServer({
  controllers: [], // Specify the controllers' classes here
});

// Run express application on the port provided in .env
app.listen(process.env.APP_PORT);
Logger.showInfoBox();

// Connect to database
new MongoHandler()