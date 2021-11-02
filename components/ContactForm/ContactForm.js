import React, { useState } from 'react';
import { Container, Grid, Form, Input, Button, Header } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { BASE_URL, BASE_URL_MONGO } from '../../constants/config';
import axios from "axios";

const ContactForm = () => {
    const { register, handleSubmit, watch, reset, formState = { errors } } = useForm();
    const [loading,setLoading] = useState(false);
    
    const onSubmit = data => {
        const sendMessage = async () => {
            try {
                setLoading(true);
                const response = axios.post(`${BASE_URL}api/contact`,{
                    ...data
                });
                reset();
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        sendMessage();
    }
    
    return (
        <Container fluid className="contact-form">
            <Container>
                <Grid columns="16">
                    <Grid.Row>
                        <Grid.Column width="16" textAlign="center">
                            <Header as="h2">Contacto</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="contact-form__form">
                        <Grid.Column width="8">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Field>
                                    <input type="email" placeholder="Correo Electronico" {...register("email")} />
                                </Form.Field>
                                <Form.Field>
                                    <input type="number" min="0" placeholder="Número de referencia" {...register("numberRef")}/>
                                </Form.Field>
                                <Form.Field>
                                    <input type="text" placeholder="Asunto" {...register("subject")}/>
                                </Form.Field>
                                <Form.Field>
                                    <textarea rows="5" placeholder="Mensaje" {...register("message")}/>
                                </Form.Field>
                                <Form.Field>
                                    <Input type="file" placeholder="" />
                                </Form.Field>
                               
                                <Button loading={loading} type="submit" content='ENVIAR' primary />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
};

export default ContactForm;