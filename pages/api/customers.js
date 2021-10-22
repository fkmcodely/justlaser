import { MongoClient } from "mongodb";
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const url = 'mongodb+srv://administrador:administrador@cluster0.fwkm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export default function handler(req,res) {
    const { method } = req;
    if(method === 'GET') {
        getUser(req,res);
    }
    if(method === 'POST') {
        registerUser(req,res)
    }
}


function getUser({ body },res) {
    const { email , password } = body;
    const fetch = async () => {
        try {
            const client = await MongoClient.connect(url);
            const db = client.db();
            const collection = db.collection("customers");
            const request = await collection.findOne({ email });
            
            return res.status(200).json({
               request
            })
        } catch(err) {
            console.log(`Error: ${err}`)
        }
    };
    fetch();
};

function registerUser({ body },res) {
    const fetch = async () => {
        const { email , password, name } = body;
        const templateUser = {
            id: uuidv4(),
            email:email,
            password: bcrypt.hashSync(password,10),
            name: name,
        }
        try {
            const client = await MongoClient.connect(url);
            const db = client.db();
            const collection = db.collection("customers");
            const response = await collection.insertOne(templateUser);
            client.close();
            console.log(response)
            return res.status(200).json({
               
            })
        } catch(err) {
            console.log(`Error: ${err}`)
            res.status(500)
        }
    }
    fetch();
}