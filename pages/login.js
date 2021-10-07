import React from 'react';
import Head from "next/head";
import { useForm } from 'react-hook-form';
import { 
    Container, 
    Form, 
    Checkbox, 
    Button, 
    Grid, 
    Header,
    Image 
} from 'semantic-ui-react';

const login = () => {
    return (
        <>
            <Container fluid className="login">
                <Grid 
                    columns="16" 
                    verticalAlign="middle"
                    className="login__grid"
                >
                    <Grid.Row className="login__row">
                        <Grid.Column 
                            width="16"
                            className="login__content"
                        >
                            <LogInContainer/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </>
    );
};

function LogInContainer({}) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = request => console.log(request);
    
    return(
        <Grid columns="16" className="log-in-container">
            <Image 
                src="http://172.26.0.114:8080/farhos/VAADIN/themes/farhos/logo_farhos.png" 
                className="log-in-container-logo" 
                alt="" 
            />
            <Grid.Row>
                <Grid.Column textAlign="center" width="16">
                    <Header as="h3" className="log-in-container__title">
                        Identificación de usuario
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="16">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <input placeholder='Usuario' {...register("user")}/>
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Contraseña' {...register("password")}/>
                        </Form.Field>
                        <Button className="log-in-container__submit" fluid type='submit'>ACEPTAR</Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default login;