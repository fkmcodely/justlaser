import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { Grid , Header , Table , Label , Menu} from "semantic-ui-react";
import { BASE_URL } from '../../../constants/config';

const Contact = () => {
    const [messagesList,setMessagesList] = useState([]);
    const [error,setError] = useState(false);

    useEffect(() => {
        console.log('cargar')
        const fetchMessages = async () => {
            try {
                const response = await axios(`${BASE_URL}api/contact`);
                setMessagesList(response.data.messagesList)
            } catch (err) { 
                setError(true);
            }
        }
        fetchMessages();
    },[]);

    return (
        <Grid columns="16" className="backoffice-contact">
            <Grid.Row>
                <Grid.Column width="16">
                    <Header>ADMINISTRACIÓN DE MENSAJES</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="15">
                    <MessagesTable messagesList={messagesList} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const MessagesTable = ({ messagesList }) => {

    return (
        <Table celled columns="16">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ASUNTO</Table.HeaderCell>
                    <Table.HeaderCell>EMAIL</Table.HeaderCell>
                    <Table.HeaderCell>FECHA</Table.HeaderCell>
                    <Table.HeaderCell>MENSAJE</Table.HeaderCell>
                    <Table.HeaderCell>LEIDO</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            
            <Table.Body>
                {
                    messagesList.map((messageItem,index) => {
                        const { email , subject, message, date = '', isRead = '' } = messageItem;
                        return (
                            <Table.Row onClick={() => console.log('pepas  ')}>
                                <Table.Cell>{subject}</Table.Cell>
                                <Table.Cell>{email}</Table.Cell>
                                <Table.Cell>{date}</Table.Cell>
                                <Table.Cell>{message}</Table.Cell>
                                <Table.Cell>{isRead ? 'SI' : 'NO'}</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                
            </Table.Body>
        </Table>
    )
};

export default Contact;