import React , { useState } from 'react';
import { Accordion, Grid, Container, Header, Icon, Divider } from 'semantic-ui-react';

const DropDownJust = ({ title , list = [] }) => {
    const [selected,setSelected] = useState(0);

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
                <Divider/>
                <Grid.Row className="dropdownjust__questions">
                    <Grid.Column width="14">
                        <Accordion fluid styled>
                            {
                                list.map((option,index) => {

                                    return(
                                        <>
                                            <Accordion.Title
                                                active={selected === 0}
                                                index={index}
                                                onClick={() => setSelected(index)}
                                            >
                                            <Icon name='dropdown' />
                                            {option.title}
                                            </Accordion.Title>
                                            <Accordion.Content active={selected === index}>
                                            <p>
                                               {option.description}
                                            </p>
                                            </Accordion.Content>
                                        </>
                                    )
                                })
                            }
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default DropDownJust;