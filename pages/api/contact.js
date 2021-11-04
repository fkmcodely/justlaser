import { MongoClient } from "mongodb";
const { v4: uuidv4 } = require('uuid');
import { BASE_URL_MONGO } from "../../constants/config";
import moment from "moment";

export default function contactIndexForm(req,res) {
    const { method } = req;
    if(method === 'GET') {
        getMessages(req,res)
    }

    if(method === 'POST') {
        createMessage(req,res)
    }
}

const getMessages = (req,res) => {
    const getMessages = async () => {
        try {
            const client = await MongoClient.connect(BASE_URL_MONGO);
            const db = client.db();
            const collection = db.collection('messages');
            const messages = await collection.find().toArray();
            client.close();
            res.status(200).json({
                messagesList: messages
            })
        } catch (err) {
            res.status(500).json({
                message: 'Error en el servidor'
            });
        }
    };
    getMessages();
};

const createMessage = ({body},res) => {
    const { email , numberRef = 0, subject, message} = body;
    const fetchMessage = async () => {
        try {
            const client = await MongoClient.connect(BASE_URL_MONGO);
            const db = client.db();
            const collection = db.collection("messages");
            const templateMessage = {
                email,
                numberRef,
                subject,
                message,
                date: moment().format('DD-MM-YYYY'),
                isRead: false
            };
            const response = await collection.insertOne(templateMessage);
            client.close();
            return res.status(200).json({
                message: "El mensaje se envio correctamente."
            });
        } catch (err) {
            res.status(500);
        }
    }
    if (email && subject && message) {
        fetchMessage();
    } else {
        res.status(400).json({
            message: 'Falta información.'
        })
    }
    
};