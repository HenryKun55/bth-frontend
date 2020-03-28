import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Section, Logo, Form, Title, Input, Button, Link } from './styles'
import { colors } from '../../styles';

import { banner, logo } from '../../assets'
import api from '../../services/api';

const Login = () => {

    const history = useHistory();

    const [state , setState] = useState({
        id: ''
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await api.post('session', state)
            localStorage.setItem('@ongId', state.id);
            localStorage.setItem('@ongName', data.name);
            history.push('/profile');
        } catch (err) {
            alert('Algo deu errado :(')
        }
    }

    return (
        <Container>
            <Section>
                <Logo src={logo}/>
                <Form onSubmit={handleLogin}>
                    <Title>Faça Seu Login</Title>
                    <Input name="id" placeholder="Seu ID" onChange={handleChange} />
                    <Button>Entrar</Button>

                    <Link to="/register">
                        <FiLogIn size={16} color={colors.red} style={{ marginRight: 8 }}/>
                        Não Tenho Cadastro
                    </Link>
                </Form>
            </Section>
            <Logo src={banner}/>
        </Container>
    )
}

export default Login;
