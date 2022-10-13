import { Router } from 'express';
import { CreateDeliveryController } from '../../../../modules/deliveries/controllers/CreateDeliveryController';
import { FindAllAvailableController } from '../../../../modules/deliveries/controllers/FindAllAvailableController';
import { FindAllDeliveriesInProgressController } from '../../../../modules/deliveries/controllers/FindAllDeliveriesInProgressController';
import { UpdateDeliveryController } from '../../../../modules/deliveries/controllers/UpdateDeliveryController';
import { UpdateEndDateController } from '../../../../modules/deliveries/controllers/UpdateEndDateController';
import { ensureAuthenticatedDeliveryman, ensureAuthenticatedClient } from '../middlewares/ensureAuthenticated';

const delivery = Router();

const findAllAvailable = new FindAllAvailableController();
const updateEndDateController = new UpdateEndDateController();
const createDeliveryController = new CreateDeliveryController();
const updateDeliveryController = new UpdateDeliveryController();
const findAllDeliveriesInProgressController = new FindAllDeliveriesInProgressController();

delivery.post('/delivery', ensureAuthenticatedClient, createDeliveryController.handle);

delivery.get('/delivery/in-progress', ensureAuthenticatedClient, findAllDeliveriesInProgressController.handle);

delivery.get('/delivery/available', ensureAuthenticatedDeliveryman, findAllAvailable.handle);

delivery.put('/delivery/update-deliveryman/:id', ensureAuthenticatedDeliveryman, updateDeliveryController.handle);

delivery.put('/delivery/update-end-date/:id', ensureAuthenticatedDeliveryman, updateEndDateController.handle);

export { delivery };
