import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

//routes
import accountRoutes from './routes/account.routes';
import clientRoutes from './routes/clients.routes';
import identificationRoutes from './routes/identification.routes';
import addressRoutes from './routes/adresses.routes';
import solicitudesRoutes from './routes/solicitudes.routes';


const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(accountRoutes);
app.use(clientRoutes);
app.use(identificationRoutes);
app.use(addressRoutes);
app.use(solicitudesRoutes);

export default app;