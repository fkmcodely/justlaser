import React, { useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Contact from '../components/BackOffice/Contact/Contact';
const backoffice = () => {

    useEffect(() => {
        document.getElementById('header-just').style.display = 'none';
        document.getElementById('footer-just').style.display = 'none';
    },[]);

    return (
        <>
        <HeaderOffice />
        <Container fluid className="backoffice">
            <Grid columns="16" className="backoffice__grid">
                <Grid.Row  className="backoffice__row">
                    <Grid.Column width="3" className="backoffice__menu">
                        <MenuBackOffice />
                    </Grid.Column>
                    <Grid.Column width="13">
                        <Contact />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </>
    );
};


// MENU DEL BACKOFFICE 
const MenuBackOffice = () => {
    const MenuOptions = [
        "Inicio",
        "Manual de usuario",
        "Servicios",
        "Materiales",
        "Presupuestos",
        "Mensajes"
    ]

    return (
        <Grid columns="16" stackable className="menu-backoffice">
            { MenuOptions.map((menu,index) => (
                <Grid.Column width="16"  className="menu-backoffice__item">
                    <div>{menu}</div>
                </Grid.Column>
            ))}
        </Grid>
    )
};

// CABECERA DEL BACKOFFICE
const HeaderOffice = () => {
    return (
        <Container fluid className="header-backoffice">
            <Grid columns="16" className="header-backoffice__row">
                <Grid.Row >
                    <Grid.Column width="5">
                        <img className="header-backoffice__logo" src='http://localhost:3000/justlaserlogobackoffice.png' />
                    </Grid.Column>
                    <Grid.Column width="11">
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
};



export default backoffice;