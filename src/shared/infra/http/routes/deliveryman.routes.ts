import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../../../../modules/account/controllers/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../../../../modules/deliveryman/controllers/CreateDeliverymanController';
import { FindAllDeliviesDeliverymanController } from '../../../../modules/deliveryman/controllers/FindAllDeliviesDeliverymanController';
import { ensureAuthenticatedDeliveryman } from '../middlewares/ensureAuthenticated';

const deliveryman = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllDeliviesDeliverymanController = new FindAllDeliviesDeliverymanController();

deliveryman.post('/deliveryman', createDeliverymanController.handle);

deliveryman.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

deliveryman.get('/deliveryman/deliveries', ensureAuthenticatedDeliveryman, findAllDeliviesDeliverymanController.handle);

export { deliveryman };
