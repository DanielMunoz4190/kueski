import { getConnection } from "./../database/database";


const getClients =  async(req, res) => {
    try{
        const connection = await getConnection();
        
        const result = await connection.query("SELECT * FROM Client");
        
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

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

const updateClient = async(req, res) => {
    try{
        const{ id } = req.params;
        const { password, client_name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, client_data_other, is_client, is_blocked, location} = req.body;
        if(!client_name || !born_date || curp){
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
        const result = await connection.query("UPDATE Client SET ? WHERE client_id = ?", [newClient, id]);
        res.json({message: "Client Updated"});
    }
    catch(e){
        res.status(500);
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
