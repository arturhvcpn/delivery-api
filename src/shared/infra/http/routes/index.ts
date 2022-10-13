import { Router } from 'express';
import { clients } from './clients.routes';
import { delivery } from './delivery.routes';
import { deliveryman } from './deliveryman.routes';

const router = Router();

router.use('/api', deliveryman, clients, delivery);

export { router };