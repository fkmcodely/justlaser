import React from 'react';
import { Accordion, Grid, Container, Header, Icon } from 'semantic-ui-react';

const DropDownJust = ({ title }) => {
    return (
        <Container className="dropdownjust">
            <Grid columns="16">
                <Grid.Row>
                    <Grid.Column width="16">
                        <Header>
                            {title}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="dropdownjust__questions">
                    <Grid.Column width="14">
                        <Accordion fluid styled>
                            <Accordion.Title>
                                <Icon name="dropdown" />
                                1. Elige los materiales que necesites.
                            </Accordion.Title>
                            <Accordion.Content>
                                <p>Respuesta</p>
                            </Accordion.Content>

                            <Accordion.Title>
                                <Icon name="dropdown" />
                                2. Descarga nuestra plantilla de trabajo.
                            </Accordion.Title>
                            <Accordion.Content>
                                <p>Respuesta</p>
                            </Accordion.Content>

                            <Accordion.Title>
                                <Icon name="dropdown" />
                                3. Dibuja los tamaños de las planchas que hayas elegido y traza las piezas que necesites.
                            </Accordion.Title>
                            <Accordion.Content>
                                <p>Respuesta</p>
                            </Accordion.Content>

                            <Accordion.Title>
                                <Icon name="dropdown" />
                                4. Iguala las capas según el tipo de corte
                            </Accordion.Title>
                            <Accordion.Content>
                                <p>Respuesta</p>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default DropDownJust;