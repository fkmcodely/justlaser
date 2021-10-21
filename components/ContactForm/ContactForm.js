import React from 'react';
import { Container, Grid, Form, Input, Button, Header } from 'semantic-ui-react';

const ContactForm = () => {
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
                            <Form>
                                <Form.Field>
                                    <Input type="email" placeholder="Correo Electronico" />
                                </Form.Field>
                                <Form.Field>
                                    <Input type="number" min="0" placeholder="Número de referencia" />
                                </Form.Field>
                                <Form.Field>
                                    <Input type="text" placeholder="Asunto" />
                                </Form.Field>
                                <Form.Field>
                                    <textarea rows="5" placeholder="Mensaje" />
                                </Form.Field>
                                <Form.Field>
                                    <Input type="file" placeholder="Mensaje" />
                                </Form.Field>
                                <Button className="contact-form__btnsubmit" type='submit'>Enviar</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
};

export default ContactForm;