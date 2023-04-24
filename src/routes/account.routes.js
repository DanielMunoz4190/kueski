import {Router} from 'express';
import { methods as accountController } from '../controllers/account.controller';

const router = Router();

router.get('/login', accountController.loginAccount);
router.get('/getAccounts', accountController.getAccounts);
router.get('/getAccount/:id', accountController.getAccount);
router.get('/getAccountByUserName/:user_name', accountController.getAccountByUserName);
router.get('/getAccountByPhoneNumber/:phone_number', accountController.getAccountByPhoneNumber);
router.post('/registerAccount', accountController.registerAccount);
router.patch('/updateAccount/:id', accountController.updateAccount);
router.delete('/deleteAccount/:id', accountController.deleteAccount);

export default router;