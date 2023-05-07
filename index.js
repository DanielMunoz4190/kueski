import app from './app';
import accountRoutes from './routes/account.routes';
import clientRoutes from './routes/clients.routes';
import identificationRoutes from './routes/identification.routes';
import addressRoutes from './routes/adresses.routes';
import solicitudesRoutes from './routes/solicitudes.routes';
import cors from 'cors';
  



app.use(accountRoutes);
app.use(clientRoutes);
app.use(identificationRoutes);
app.use(addressRoutes);
app.use(solicitudesRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

const main=()=>{
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get("port")}`);
}

main();