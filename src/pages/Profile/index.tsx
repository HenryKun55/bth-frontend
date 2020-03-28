import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Header, Logo, TitleHeader, Button, Link, Title, List, Card, CardTitle, CardDescription, Trash, Nothing } from './styles'
import { colors } from '../../styles';

import { logo } from '../../assets'
import api from '../../services/api';
import { Incident } from '../../types/Incident';

const Login = () => {

    const [incidents, setIncidents] = useState<Incident[]>([]);

    const ongName = localStorage.getItem('@ongName');
    const ongId = localStorage.getItem('@ongId');

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId])

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            <Header>
                <Logo src={logo}/>
                    <TitleHeader>{`Bem Vinda, ${ongName}`}</TitleHeader>

                <Link to="/incidents/new">
                    Cadastrar Novo Caso
                </Link>
                <Button onClick={handleLogout}>
                    <FiPower size={20} color={colors.red} />
                </Button>
            </Header>

            <Title>Casos Cadastrados</Title>

            {incidents.length === 0 && (
                <Nothing>Sem Casos</Nothing>
            )}

            <List>
                {incidents.map(incident => (
                    <Card key={incident.id}>
                        <CardTitle first>CASO: </CardTitle>
                        <CardDescription>{incident.title}</CardDescription>

                        <CardTitle>DESCRIÇÃO: </CardTitle>
                        <CardDescription>{incident.description}</CardDescription>

                        <CardTitle>VALOR: </CardTitle>
                        <CardDescription>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</CardDescription>

                        <Trash onClick={() => handleDelete(incident.id)}>
                            <FiTrash2 size={20} color={colors.trash} />
                        </Trash>
                    </Card>
                ))}
            </List>
        </Container>
    )
}

export default Login;
