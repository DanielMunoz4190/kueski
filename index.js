import app from './app';
import accountRoutes from './routes/account.routes';
import clientRoutes from './routes/clients.routes';
import identificationRoutes from './routes/identification.routes';
import addressRoutes from './routes/adresses.routes';
import solicitudesRoutes from './routes/solicitudes.routes';
const main=()=>{
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get("port")}`);
}
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permite los métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permite las cabeceras permitidas
    next();
  });
app.use(accountRoutes);
app.use(clientRoutes);
app.use(identificationRoutes);
app.use(addressRoutes);
app.use(solicitudesRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
});
main();