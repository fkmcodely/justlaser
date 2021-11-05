import moment from "moment";
import { MongoClient } from "mongodb";
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
import { BASE_URL_MONGO } from "../../constants/config";
const url = BASE_URL_MONGO;

export default function handlerServices(req,res) {
    const { method } = req;
   
    if(method === 'GET') {
        getStepsServices(req,res);
    }
    if(method === 'POST') {
        createStepService(req,res);  
    }
}


const getStepsServices = ({body},res) => {
    const fetchManualSteps = async () => {
        try {
            const { language } = body;
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ServicesSteps");
            const fetchManul = await collection.find({ language : language }).toArray();
            
            res.status(200).json({
                ...fetchManul
            });
        } catch(err) {
            console.error(`Error al obtener pasos de servicios ${err}`);
            res.status(500).json({
                message: 'No se puede obtener los servicios de la base de datos.'
            });
        }
    }
    fetchManualSteps();
};

const createStepService = ({ body },res) => {
    const fetchInfoConfig = async () => {
        try {
            const { title = '', image = '', video = '', order = '', description = '', buttons = {}, language = 'es' } = body;
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ServicesSteps");
            const createServiceStep = await collection.insertOne({
                title,
                image,
                video,
                order,
                description, 
                buttons, 
                language
            });
            res.status(200).json({
                configurationSite: createServiceStep
            });
        } catch (err) {
            console.error(`Error al crear un paso del manual ${err}`);
            res.status(500).json({
                error: `No se pudo obtener la configuración del sitio.`
            });
        }
    };
    fetchInfoConfig();
};





