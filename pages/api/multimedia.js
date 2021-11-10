import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";
import fs from "fs";

const handler = nextConnect();
handler.use(middleware);

handler.post((req,res) => {
    console.log(req)
    saveImage(req,res)
});

const saveImage = ({ body , files, query } , res) => {
    try {
        console.log(files,body)
        fs.readFile(files.file[0].path , function (err,data) {
            fs.writeFile(`uploads/${query.id}`,data, (err) => {
                if(err) {
                    console.error(`Error al guardar el fichero: ${err}`)
                } else {
                    console.log(`File upload successfully`);
                    res.status(200).json({
                        message: 'Archivo subido correctamente.'
                    });
                }
            })
        })
    } catch (err) {
        console.error(`Error al guardar imagen: ${err}`);
        res.status(500).json({
            message: `Error al guardar recursos`
        });
    }
}

export const config = {
    api: {
      bodyParser: false
    }
}

export default handler;