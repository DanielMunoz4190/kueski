import { Router } from 'express';
import { methods as identificationMethods } from '../controllers/identification.controller';

const router = Router();

router.get('/getIdentifications', identificationMethods.getIdentifications);
router.get('/getIdentification:id', identificationMethods.getIdentification);
router.get('/getIdentificationByClient:id', identificationMethods.getIdentificationByClient);
router.post('/registerIdentification', identificationMethods.registerIdentification);
router.patch('/updateIdentification:id', identificationMethods.updateIdentification);
router.delete('/deleteIdentification:id', identificationMethods.deleteIdentification);

export default router;