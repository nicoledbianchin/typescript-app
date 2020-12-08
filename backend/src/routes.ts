import { Router } from 'express';
import userController from './controller/userController';
import UserController from './controller/userController'

const routes = Router();

routes.get('/users', userController.index);
routes.post('/users/create', userController.create);

export default routes;