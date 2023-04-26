import { getConnection } from "./../database/database";

const getAdresses =  async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Adress");
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(error.message);
    }
}

const getAdress = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Adress WHERE adress_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const getAdressByClient = async(req, res) => {
    try{
        const { client_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Adress WHERE client_id = ?", [client_id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const registerAdress = async(req, res) => {
    try{
        const { client_id, country, state, city, neighborhood, zip_code, street, ext_number, int_number } = req.body;
        if(!client_id || !country || !state || !city || !neighborhood || !zip_code || !street){
            res.status(400);
            res.send("Missing required fields");
        }
        const newAdress = {
            client_id,
            country,
            state,
            city,
            neighborhood,
            zip_code,
            street,
            ext_number,
            int_number
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Adress SET ?", [newAdress]);
        res.json({message: "Adress Created"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }   
};

const updateAdress = async(req, res) => {
    try{
        const { id } = req.params;
        const { client_id, country, state, city, neighborhood, zip_code, street, ext_number, int_number } = req.body;
        if(!client_id || !country || !state || !city || !neighborhood || !zip_code || !street){
            res.status(400);
            res.send("Missing required fields");
        }
        const newAdress = {
            client_id,
            country,
            state,
            city,
            neighborhood,
            zip_code,
            street,
            ext_number,
            int_number
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Adress SET ? WHERE adress_id = ?", [newAdress, id]);
        res.json({message: "Adress Updated"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }   
}

const deleteAdress = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Adress WHERE adress_id = ?", [id]);
        res.json({message: "Adress Deleted"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

export const methods = {
    getAdresses,
    getAdress,
    getAdressByClient,
    registerAdress,
    updateAdress,
    deleteAdress
}
