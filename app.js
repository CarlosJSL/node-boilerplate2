import bodyParser from 'body-parser';
import helmet from 'helmet';
import express from 'express';
import { responseErrorHandler } from './errorsHandlers';
import { loadAllRoutes} from './utils';
import logger from 'morgan';

const app = express();

loadAllRoutes(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(responseErrorHandler);

export default app;
