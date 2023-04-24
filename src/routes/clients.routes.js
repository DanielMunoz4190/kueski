import { Router } from 'express';
import { methods as clientsController } from '../controllers/clients.controller';

const router = Router();

router.get('/getClients', clientsController.getClients);
router.get('/getClient/:id', clientsController.getClient);
router.get('/getClientByUserName/:user_name', clientsController.getClientByUserName);
router.get('/getClientByPhoneNumber/:phone_number', clientsController.getClientByPhoneNumber);
router.post('/registerClient', clientsController.registerClient);
router.patch('/updateClient/:id', clientsController.updateClient);
router.delete('/deleteClient/:id', clientsController.deleteClient);

export default router;