import {Router} from 'express';
import { methods as addressMethods } from '../controllers/adresses.controller';

const router = Router();

router.get('/getAdresses', addressMethods.getAdresses);
router.get('/getAdress:id', addressMethods.getAdress);
router.get('/getAdressByClient:id', addressMethods.getAdressByClient);
router.post('/registerAdress', addressMethods.registerAdress);
router.put('/updateAdress:id', addressMethods.updateAdress);
router.delete('/deleteAdress:id', addressMethods.deleteAdress);

export default router;