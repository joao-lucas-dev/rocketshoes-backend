import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store );

routes.post('/users', UserController.store );

routes.post('/files', upload.single('file'), FileController.store );

export default routes;
