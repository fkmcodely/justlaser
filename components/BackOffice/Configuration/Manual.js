import React , { useEffect, useState } from 'react';
import { Grid , Header , Button, Table, Modal, Divider, Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

import axios from "axios";

const Manual = ({ option }) => {
    const [modalAdd,setModalAdd] = useState(false);
    
    return (
        <>
        <Grid columns="16">
            <Grid.Row>
                <Grid.Column width="12">
                    <Header>
                        ADMINISTRACIÓN DE SERVICIOS
                    </Header>
                </Grid.Column>
                <Grid.Column width="4" style={{display: 'flex'}} floated="right">
                    <p>Español/Ingles </p>
                    <ModalAddManual rendered={<Button primary>+</Button>} open={modalAdd} setOpen={setModalAdd} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="16">
                    <ManualTable />
                </Grid.Column>
            </Grid.Row>
        </Grid>
       
        </>
    );
};

const ManualTable = () => {
    const [manualItems,setManualItems] = useState([]);
    const [openItem,setOpenItem] = useState(false);
    useEffect(() => fetchItems(),[]);
    
    const fetchItems = () => {
        const fetchManualItems = async () => {
            try {   
                const fetchItems = await axios(`/api/manual`);
                const { data : { steps } } = fetchItems;
                setManualItems(steps);
            } catch (err){
                console.error(`Error al obtener lista del manual: ${err}`)
            }
        };
        fetchManualItems();
    };

    return (
        <Table celled columns="16">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ORDEN</Table.HeaderCell>
                    <Table.HeaderCell>TITULO</Table.HeaderCell>
                    <Table.HeaderCell>DESCRIPCIÓN</Table.HeaderCell>
                    <Table.HeaderCell>RECURSO</Table.HeaderCell>
                    <Table.HeaderCell>ACCIONES</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            
            <Table.Body>
                {
                    manualItems.map((stepManual,index) => {
                        const { title , image, video, order, description, buttons, language } = stepManual;

                        return (
                            <Table.Row>
                                <Table.Cell>{order}</Table.Cell>
                                <Table.Cell>{title}</Table.Cell>
                                <Table.Cell>{description}</Table.Cell>
                                <Table.Cell>{image !== '' ? image : video}</Table.Cell>
                                <Table.Cell>
                                    <ModalEditManual step={stepManual} open={openItem} setOpen={setOpenItem} rendered={<p>Editar</p>} language='ES' />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                
            </Table.Body>
        </Table>
    )
};

const ModalAddManual = ({ open , setOpen, rendered , language = 'ES'}) => {
    const [primary,setPrimary] = useState(false);
    const [secondary,setSecondary] = useState(false);
    const [textArea,setTextArea] = useState('');
    const [loading,setLoading] = useState(false);
    const [multimedia,setMultimedia] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const modalProps = {
        onClose:() => setOpen(false),
        onOpen:() => setOpen(true),
        open:open,
        size:'large',
        trigger: rendered
    };

    const handleSubmitManual = (fields) => {
        setLoading(true);
        const fetchManual = async () => {
            try {
                const request = await axios.post('/api/manual', {
                    ...fields,
                    language: language
                });
                const data = new FormData();
                data.append('file',multimedia);
                const uploadMedia = await axios.post('/api/multimedia', data,{
                    params: {
                        id: request.data.id
                    }
                });
                console.log(uploadMedia);
                setLoading(false);
                setOpen(false);
            } catch (err) {
                console.error(`Error al crear nuevo paso del manual: ${err}`);
                setLoading(false);
                setOpen(false);
            }
        };
        fetchManual();
    };
    
    return (
        <Modal {...modalProps} className="manual-modal-add">
            <Modal.Header>
                <Header>Añadir nuevo paso del manual</Header>
            </Modal.Header>
            <Modal.Content>
                <p>Rellene los siguientes datos para crear un nuevo paso del manual 
                (Recuerde que dependiendo del idioma seleccionado se creara el paso para un idioma o otro).</p>
                <Form onSubmit={handleSubmit(handleSubmitManual)}>
                    <input placeholder="Numero del manual:" type="number" {...register("order")} />
                    <input type="text" {...register("title")} placeholder="Titulo del paso" />
                    <input {...register("description")} placeholder="Describe la información del paso." />
                    <div>
                        <p>Archivos multimedia:</p>
                        <input onChange={(ev) => {setMultimedia(ev.target.files[0])}} type="file" name="mediaManual" />
                    </div>
                    <div className="manual-modal-add__buttons">
                        <p className="primary">
                            ¿Desea añadir un boton primario?: <input type="checkbox" checked={primary} onChange={(ev) => setPrimary(ev.target.checked)} />
                            
                            { primary && (<div>
                                <input {...register("buttons.primary.title")} placeholder="Titulo del boton" type="text" />
                                <input {...register("buttons.primary.href")} placeholder="Link del boton" type="text" />
                                <div>
                                    <label>
                                        Seleccione el color del boton:
                                        <input type="color" {...register("buttons.primary.color")}/>
                                    </label>
                                </div>
                            </div>)
                            }
                        </p>
                        <p className="secondary">
                            ¿Desea añadir un boton secundario?: <input type="checkbox" checked={secondary} onChange={ev => setSecondary(ev.target.checked)} />
                            { secondary && (<div>
                                <input placeholder="Titulo del boton" type="text" {...register("buttons.secondary.title")}/>
                                <input placeholder="Link del boton" type="text" {...register("buttons.secondary.href")}/>
                                <div>
                                    <label>
                                        Seleccione el color del boton:
                                        <input type="color" {...register("buttons.secondary.color")}/>
                                    </label>
                                </div>
                            </div>)
                            }
                        </p>
                    </div>
                    <Button loading={loading} type="submit" floated="right" content="GUARDAR" primary />
                </Form>
            </Modal.Content>
        </Modal>
    )
}

const ModalEditManual = ({ open , setOpen, rendered , language = 'ES', step}) => {
    const [primary,setPrimary] = useState(typeof step.buttons?.primary?.title !== 'undefined' ? true : false);
    const [secondary,setSecondary] = useState(typeof step.buttons?.secondary?.title !== 'undefined' ? true : false);
    const [textArea,setTextArea] = useState('');
    const [loading,setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            order: step.order,
            title: step.title,
            description: step.description,
            buttons: {
                primary: {
                    title: step.buttons?.primary?.title || '',
                    href: step.buttons?.primary?.href || '',
                    color: step.buttons?.primary?.color || '',
                },
                secondary: {
                    title: step.buttons?.secondary?.title || '',
                    href: step.buttons?.secondary?.href || '',
                    color: step.buttons?.secondary?.color || '',
                }
            }
        }
    });
    
    const modalProps = {
        onClose:() => setOpen(false),
        onOpen:() => setOpen(true),
        open:open,
        size:'large',
        trigger: rendered
    };

    const handleSubmitManual = (fields) => {
        setLoading(true);
        const fetchManual = async () => {
            try {
                const request = await axios.put('/api/manual', {
                    step: step.id,
                    ...fields,
                    language: language
                });
                setLoading(false);
                setOpen(false);
            } catch (err) {
                console.error(`Error al actualizar el paso del manual: ${err}`);
                setLoading(false);
                setOpen(false);
            }
        };
        fetchManual();
    };
    
    return (
        <Modal {...modalProps} className="manual-modal-edit">
            <Modal.Header>
                <Header>Editar paso del manual</Header>
            </Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(handleSubmitManual)}>
                    <input placeholder="Numero del manual:" type="number" {...register("order")} />
                    <input type="text" {...register("title")} placeholder="Titulo del paso" />
                    <input className="manual-modal-edit__textarea" {...register("description")} placeholder="Describe la información del paso." />
                    <div>
                        <p>Archivos multimedia:</p>
                        <input type="file" />
                    </div>
                    <div className="manual-modal-edit__buttons">
                        <p className="primary">
                            ¿Desea añadir un boton primario?: <input type="checkbox" checked={primary} onChange={(ev) => setPrimary(ev.target.checked)} />
                            
                            { primary && (<div >
                                <input {...register("buttons.primary.title")} placeholder="Titulo del boton" type="text" />
                                <input {...register("buttons.primary.href")} placeholder="Link del boton" type="text" />
                                <div>
                                    <label>
                                        Seleccione el color del boton:
                                        <input type="color" {...register("buttons.primary.color")}/>
                                    </label>
                                </div>
                            </div>)
                            }
                        </p>
                        <p className="secondary">
                            ¿Desea añadir un boton secundario?: <input type="checkbox" checked={secondary} onChange={ev => setSecondary(ev.target.checked)} />
                            { secondary && (<div >
                                <input placeholder="Titulo del boton" type="text" {...register("buttons.secondary.title")}/>
                                <input placeholder="Link del boton" type="text" {...register("buttons.secondary.href")}/>
                                <div>
                                    <label>
                                        Seleccione el color del boton:
                                        <input type="color" {...register("buttons.secondary.color")}/>
                                    </label>
                                </div>
                            </div>)
                            }
                        </p>
                    </div>
                    <Button loading={loading} type="submit" floated="right" content="ACTUALIZAR" primary />
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default Manual;