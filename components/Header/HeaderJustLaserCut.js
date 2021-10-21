import React from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';

const HeaderJustLaserCut = () => {
    return (
        <Container fluid className="header-just">
            <Container>
                <Grid columns={16}>
                    <Grid.Row className="header-just__static">
                        <Grid.Column width={5}>
                            <div>
                                <p>info@archicercle.com</p>
                                <p>(+34) 649 999 853</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <img src='http://localhost:3000/JustLaseLogo.png' />
                        </Grid.Column>
                        <Grid.Column width={5} className="header-just__user-experience-container">
                            <nav className="header-just__user-experience">
                                <p>Contacto</p>
                                <p>Registro</p>
                            </nav>
                        </Grid.Column>
                    </Grid.Row>
                    <MenuJust />        
                </Grid>
            </Container>
        </Container>
    );
};


const MenuJust = () => {

    const NavigationOptions = ["Tutoriales","Materiales","Plantillas","Servicios","Blog","Tus Proyectos"];
    
    return (
        <Grid.Row className="menu-just">
                <Grid.Column width="16">
                    <Menu pointing secondary className="menu-just__container">
                        {
                            NavigationOptions.map((page,index) => (
                                <Menu.Item active={index === 0 ? true : false}>
                                    {page}
                                </Menu.Item>        
                            ))
                        }
                        
                    </Menu>
                </Grid.Column>
        </Grid.Row>
    )
}

export default HeaderJustLaserCut;