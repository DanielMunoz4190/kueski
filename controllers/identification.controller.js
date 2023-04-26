import { getConnection } from "./../database/database";

const getIdentifications =  async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Identification");
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(error.message);
    }
}

const getIdentification = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Identification WHERE identification_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const getIdentificationByClient = async(req, res) => {
    try{
        const { client_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Identification WHERE client_id = ?", [client_id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const registerIdentification = async(req, res) => {
    try{
        const { client_id, identification_type, identification_number } = req.body;
        if(!client_id || !identification_type || !identification_number){
            res.status(400);
            res.send("Missing required fields");
        }
        const newIdentification = {
            client_id,
            identification_type,
            identification_number,
            identification_image
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Identification SET ?", [newIdentification]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const updateIdentification = async(req, res) => {
    try{
        const { id } = req.params;
        const { client_id, identification_type, identification_number } = req.body;
        if(!client_id || !identification_type || !identification_number){
            res.status(400);
            res.send("Missing required fields");
        }
        const newIdentification = {
            client_id,
            identification_type,
            identification_number,
            identification_image
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Identification SET ? WHERE identification_id = ?", [newIdentification, id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const deleteIdentification = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Identification WHERE identification_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

export const methods = {
    getIdentifications,
    getIdentification,
    getIdentificationByClient,
    registerIdentification,
    updateIdentification,
    deleteIdentification
}