import { Router } from 'express';
import { AuthenticateClientController } from '../../../../modules/account/controllers/AuthenticateClientController';
import { CreateClientController } from '../../../../modules/clients/controllers/CreateClientController';

const clients = Router();

const createClientsController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

clients.post('/client', createClientsController.handle);

clients.post('/authenticate', authenticateClientController.handle);

export { clients };
