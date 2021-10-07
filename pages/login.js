import React from 'react';
import Head from "next/head";
import { Container, Grid, Header } from 'semantic-ui-react';

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

    return(
        <Grid columns="16" className="log-in-container">
            <Grid.Row>
                <Grid.Column textAlign="center" width="16">
                    <Header as="h3" className="log-in-container__title">
                        Identificación de usuario
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default login;