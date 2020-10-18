import express from 'express';
import 'express-async-errors';
import './database/connection';
import path from 'path';
import cors from 'cors';

import routes from '../src/routes/routes';

import exceptionHandler from './errors/exception-handler';

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname ,'..','/uploads' )));

app.use(exceptionHandler);

app.listen(3333);