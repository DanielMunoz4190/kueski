import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

//routes
import accountRoutes from './routes/account.routes';
import clientRoutes from './routes/clients.routes';
import identificationRoutes from './routes/identification.routes';
import addressRoutes from './routes/adresses.routes';
import solicitudesRoutes from './routes/solicitudes.routes';


const app = express();



app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Permite los métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permite las cabeceras permitidas
    next();
  });
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