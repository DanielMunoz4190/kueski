import { getConnection } from "./../database/database";

const getSolicitudes =  async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Solicitud");
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(error.message);
    }
}

const getSolicitud = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Solicitud WHERE solicitud_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const getSolicitudByClient = async(req, res) => {
    try{
        const { client_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Solicitud WHERE client_id = ?", [client_id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const registerSolicitud = async(req, res) => {
    try{
        const { client_id, type, date, comment } = req.body;
        if(!client_id || !type || !date){
            res.status(400);
            res.send("Missing required fields");
        }
        const newSolicitud = {
            client_id,
            type,
            date,
            comment
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Solicitud SET ?", [newSolicitud]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const updateSolicitud = async(req, res) => {
    try{
        const { id } = req.params;
        const { client_id, type, date, comment } = req.body;
        if(!client_id || !type || !date){
            res.status(400);
            res.send("Missing required fields");
        }
        const updatedSolicitud = {
            client_id,
            type,
            date,
            comment
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Solicitud SET ? WHERE solicitud_id = ?", [updatedSolicitud, id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

const deleteSolicitud = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Solicitud WHERE solicitud_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
}

export const methods = {
    getSolicitudes,
    getSolicitud,
    getSolicitudByClient,
    registerSolicitud,
    updateSolicitud,
    deleteSolicitud
}
