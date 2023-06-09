import { getConnection } from "./../database/database";


const getClients = async (req, res) => {
    try {
      const connection = await getConnection();
      const contador = await connection.query("SELECT COUNT(*) FROM Client");
      const result = await connection.query("SELECT * FROM Client");
  
      // Verificar que contador tiene un resultado válido
      if (contador && contador[0] && contador[0]['count(*)'] !== undefined) {
        const data = {
          count: contador[0]['count(*)'],
          results: result
        };
  
        res.json(data);
      } else {
        throw new Error('Error al obtener el contador de clientes.');
      }
    } catch (e) {
      res.status(500);
      res.send(e.message);
    }
  };

const getClient = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Client WHERE client_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const getClientByUserName = async(req, res) => {
    try{
        const { user_name } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Client WHERE user_name = ?", [user_name]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const getClientByPhoneNumber = async(req, res) => {
    try{
        const { phone_number } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Client WHERE phone_number = ?", [phone_number]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const registerClient = async(req, res) => {
    try{
        const { password, client_name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, client_data_other, is_client, is_blocked, location} = req.body;
        if(!client_name || !born_date || !curp){
            res.status(400);
            res.send("Missing essential parameters");
            return;
        }
        const newClient = {
            password,
            client_name,
            first_last_name,
            second_last_name,
            born_date,
            nationality,
            state_of_birth,
            economic_activity,
            curp, 
            gender,
            phone_number,
            email,
            client_data_other,
            is_client,
            is_blocked
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Client SET ?", [newClient]);
        res.json({message: "Client Created"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }  
}

const updateClient = async (req, res) => {
    try {
      const { id } = req.params;
      const connection = await getConnection();
  
      const query = "UPDATE Client SET " +
                    "password = ?, " +
                    "client_name = ?, " +
                    "first_last_name = ?, " +
                    "second_last_name = ?, " +
                    "born_date = ?, " +
                    "nationality = ?, " +
                    "state_of_birth = ?, " +
                    "economic_activity = ?, " +
                    "curp = ?, " +
                    "gender = ?, " +
                    "phone_number = ?, " +
                    "email = ?, " +
                    "client_data_other = ?, " +
                    "is_client = ?, " +
                    "is_blocked = ? " +
                    "WHERE client_id = ?";
      
      const values = [
        req.body.password,
        req.body.client_name,
        req.body.first_last_name,
        req.body.second_last_name,
        req.body.born_date,
        req.body.nationality,
        req.body.state_of_birth,
        req.body.economic_activity,
        req.body.curp,
        req.body.gender,
        req.body.phone_number,
        req.body.email,
        req.body.client_data_other,
        req.body.is_client,
        req.body.is_blocked,
        id
      ];
  
      const result = await connection.query(query, values);
  
      res.json({ message: "Client updated" });
    } catch (e) {
      res.status(501);
      res.send(e.message);
    }
  };
  
const deleteClient = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Client WHERE client_id = ?", [id]);
        res.json({message: "Client Deleted"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

export const methods = {
    getClients,
    getClient,
    getClientByUserName,
    getClientByPhoneNumber,
    registerClient,
    updateClient,
    deleteClient
}
