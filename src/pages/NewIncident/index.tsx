import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content, FormAddress, Section, Logo, Form, Title, Input, Button, Link, Subtitle, Description } from './styles'
import { colors } from '../../styles';

import { logo } from '../../assets'
import api from '../../services/api';

const NewIncident = () => {

    const history = useHistory();

    const ongId = localStorage.getItem('@ongId');

    const [state , setState] = useState({ })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleIncident = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(state)
        try {
            const response = await api.post('incidents', state, {
                headers: {
                    Authorization: ongId
                }
            })
            console.log(response.data);

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar novo caso, tente novamente');
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <Logo src={logo}/>
                        <Title>Cadastrar Novo Caso</Title>
                        <Subtitle>Descreva o caso detalhadamente pra encontar um herói que resolva isso!</Subtitle>

                        <Link to="/profile">
                            <FiArrowLeft size={16} color={colors.red} style={{ marginRight: 8 }}/>
                            Voltar para Home
                        </Link>
                </Section>
                <Form onSubmit={handleIncident}>
                    <Input name="title" placeholder="Título do caso" onChange={handleChange}/>
                    <Description name="description" placeholder="Descrição" onChange={handleChangeTextArea}/>
                    <Input name="value" placeholder="Valor em Reais" onChange={handleChange}/>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default NewIncident;
