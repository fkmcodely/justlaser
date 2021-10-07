import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './ExampleComponent.module.scss';

const ExampleComponent = () => {
    return (
        <Container>
            <Grid columns="16">
                <Grid.Row>
                    <Grid.Column width="8">
                        Sección 1
                    </Grid.Column>
                    <Grid.Column width="8">
                        Sección 2
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default ExampleComponent;