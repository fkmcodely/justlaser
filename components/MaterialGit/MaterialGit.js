import React from 'react';
import { Grid , Container, Button } from 'semantic-ui-react';

const MaterialGit = () => {
    return (
        <Container fluid className="material-git">
            <Grid columns="16">
                <Grid.Row>
                    <Grid.Column width="3">
        filtros
                    </Grid.Column>
                    <Grid.Column width="13">
                        <Grid columns="16" className="material-git__list">
                            <HelpCard />
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

const HelpCard = () => {
    return(
        <Grid.Column width="4" className="help-card">
            <Grid columns="16">
                <Grid.Row>
                    <Grid.Column width="16" className="help-card__bg">
                        <p>
                            Usa los filtros para encontrar el material que necesites y 
                            elige el tamaño de plancha y grosor que necesites. 
                        </p>
                        <p>
                        Si tienes tus propias planchas de material, búscalo en esta página. Si no tienes claro que material es, contáctanos!
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width="16" textAlign="right">
                        <Button className="help-card__button">Contacto</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid.Column>
    )
}

export default MaterialGit;