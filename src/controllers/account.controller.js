import { getConnection } from "./../database/database";

const loginAccount = async(req, res) => {
    try{
        const { user_name, password } = req.body;
        if(!user_name || !password){
            res.status(400);
            res.send("Missing required fields");
        }
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Account WHERE user_name = ? AND password = ?", [user_name, password]);
        //if(result.length == 0){
           // res.status(400);
          //  res.send("Invalid user name or password");
        //}

        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getAccounts =  async(req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Account");
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(error.message);
    }
};

const getAccount = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Account WHERE employe_id = ?", [id]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getAccountByUserName = async(req, res) => {
    try{
        const { user_name } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Account WHERE user_name = ?", [user_name]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const getAccountByPhoneNumber = async(req, res) => {
    try{
        const { phone_number } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Account WHERE phone_number = ?", [phone_number]);
        res.json(result);
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};



const registerAccount = async(req, res) => {
    try{
        const { password, user_name, job_area, number_emergency_contact, relation_emergency_contact, phone_number, email, location} = req.body;
        if(!password || !user_name || !job_area || !number_emergency_contact || !relation_emergency_contact || !phone_number || !email || !location){
            res.status(400);
            res.send("Bad Request");
            return;
        }
        const newAccount = {
            password,
            user_name,
            job_area,
            number_emergency_contact,
            relation_emergency_contact,
            phone_number,
            email, 
            location
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Account SET ?", [newAccount]);
        res.json({message: "Account Created"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};

const updateAccount = async(req, res) => {
    try{
        const { id } = req.params;
        const { password, user_name, job_area, number_emergency_contact, relation_emergency_contact, phone_number, email, location} = req.body;
        if(!password || !user_name || !job_area || !number_emergency_contact || !relation_emergency_contact || !phone_number || !email || !location){
            res.status(400);
            res.send("Bad Request");
            return;
        }
        const newAccount = {
            password,
            user_name,
            job_area,
            number_emergency_contact,
            relation_emergency_contact,
            phone_number,
            email,
            location
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Account SET ? WHERE employe_id = ?", [newAccount, id]);
        res.json({message: "Account Updated"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};


const deleteAccount = async(req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Account WHERE employe_id = ?", [id]);
        res.json({message: "Account Deleted"});
    }
    catch(e){
        res.status(500);
        res.send(e.message);
    }
};

export const methods = {
    loginAccount,
    getAccounts,
    getAccount,
    getAccountByUserName,
    getAccountByPhoneNumber,
    registerAccount,
    updateAccount,
    deleteAccount
};