import { Router } from 'express';
import { methods as solicitudesMethods } from '../controllers/solicitudes.controller';

const router = Router();

router.get('/getSolicitudes', solicitudesMethods.getSolicitudes);
router.get('/getSolicitud:id', solicitudesMethods.getSolicitud);
router.get('/getSolicitudByClient:id', solicitudesMethods.getSolicitudByClient);
router.post('/registerSolicitud', solicitudesMethods.registerSolicitud);
router.patch('/updateSolicitud:id', solicitudesMethods.updateSolicitud);
router.delete('/deleteSolicitud:id', solicitudesMethods.deleteSolicitud);

export default router;

