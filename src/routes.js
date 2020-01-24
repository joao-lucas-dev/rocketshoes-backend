import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ShoeController from './app/controllers/ShoeController';
import ItemController from './app/controllers/ItemController';

const routes = Router();

routes.post('/sessions', SessionController.store );

routes.post('/users', UserController.store );

routes.get('/shoes', ShoeController.index );
routes.post('/shoes', ShoeController.store );

routes.get('/shoes/:id', ItemController.index );

export default routes;
