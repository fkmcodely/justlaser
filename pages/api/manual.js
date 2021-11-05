import moment from "moment";
import { MongoClient } from "mongodb";
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
import { BASE_URL_MONGO } from "../../constants/config";
const url = BASE_URL_MONGO;

export default function handlerManual(req,res) {
    const { method } = req;
   
    if(method === 'GET') {
        getStepsManual(req,res);
    }
    if(method === 'POST') {
        createStepManualStep(req,res);  
    }
}


const getStepsManual = ({body},res) => {
    const fetchManualSteps = async () => {
        try {
            const { language } = body;
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ManualSteps");
            const fetchManul = await collection.find({ language : language }).toArray();
            
            res.status(200).json({
                ...fetchManul
            });
        } catch(err) {
            console.error(`Error al obtener pasos del manual ${err}`);
            res.status(500).json({
                message: 'No se puede obtener el manual de la base de datos.'
            });
        }
    }
    fetchManualSteps();
};

const createStepManualStep = ({ body },res) => {
    const fetchInfoConfig = async () => {
        try {
            const { image = '', video = '', order = '', description = '', buttons = {}, language = 'es' } = body;
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ManualSteps");
            const createManualStep = await collection.insertOne({
                image,
                video,
                order,
                description, 
                buttons, 
                language
            });
            res.status(200).json({
                configurationSite: createManualStep
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





