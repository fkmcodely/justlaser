import { MongoClient } from "mongodb";
const { v4: uuidv4 } = require('uuid');
import nextConnect from 'next-connect'
import fs from "fs";
import { BASE_URL_MONGO } from "../../constants/config";
const url = BASE_URL_MONGO;
import middleware from "../../middleware/middleware";

const handler = nextConnect();
handler.use(middleware);

handler.post((req,res) => {createStepManualStep(req,res)})
handler.get((req,res) => {getStepsManual(req,res)})
handler.put((req,res) => {editStepManual(req,res)})

const editStepManual = ({ body },res) => {
    const editStepManual = async () => {
        try {
            const {
                title,
                image,
                video,
                order,
                description, 
                buttons, 
                language,
                step
            } = body;
            const objectModified = {
                $set: {
                    title: title,
                    image: image,
                    video: video,
                    order: order,
                    description: description,
                    buttons: buttons,
                    language: language
                }
            };
            const filter = { id : step};
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ManualSteps");
            await collection.updateOne(filter,objectModified);
            res.status(200).json({
                message: 'Se a actualizado correctamente.'
            })
        } catch (err) {
            console.error(`Error al actualizar paso del manual: ${err}`)
            res.status(500).json({
                message: `Error al actualizar el manual.`
            })
        } 
    };
    editStepManual();
};

const getStepsManual = ({body},res) => {
    const fetchManualSteps = async () => {
        try {
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ManualSteps");
            const fetchManul = await collection.find().toArray();
            session.close();
            res.status(200).json({
                steps: fetchManul
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

const createStepManualStep = ({ body, files },res) => {
    
    const fetchInfoConfig = async () => {
        try {
            const { title = '',image = '', video = '', order = '', description = '', buttons = {} } = body;
            const session = await MongoClient.connect(url);
            const db = session.db();
            const collection = db.collection("ManualSteps");
            const idManualStep = uuidv4();
            const createManualStep = await collection.insertOne({
                id: idManualStep,
                title,
                image,
                video,
                order,
                description, 
                buttons, 
                language : 'ES'
            });
            try {
                fs.readFile(req.files.data[0].path, function (err,data) {
                    fs.writeFile(`uploads/manual/${idManualStep}`,data, function (err) {
                        if (err) {
                            console.error(`Error al guardar fichero: ${err}`)
                        } else {
                            console.log('File uploaded successfully')
                            res.status(200).json({
                                message:'Todo creado correctamente.'
                            })
                        }
                    })
                })
           } catch (err) {
               console.error(`Error de subida: ${err}`)
           }
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

export const config = {
    api: {
      bodyParser: false
    }
}

export default handler;



