import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, FormAddress, Section, Logo, Form, Title, Input, Button, Link, Subtitle } from './styles'
import { colors } from '../../styles';

import { logo } from '../../assets'

import api from '../../services/api';

const Register = () => {

    const history = useHistory();

    const [state , setState] = useState({})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('ongs', state);
            alert(`Seu ID de acesso é: ${response.data.id}`)
            history.push('/');
        } catch (err) {
            alert("Ops, ocorreu um erro");
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <Logo src={logo}/>
                        <Title>Cadastro</Title>
                        <Subtitle>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Subtitle>

                        <Link to="/">
                            <FiArrowLeft size={16} color={colors.red} style={{ marginRight: 8 }}/>
                            Voltar para o Login
                        </Link>
                </Section>
                <Form onSubmit={handleRegister}>
                    <Input name="name" placeholder="Nome da ONG" onChange={handleChange}/>
                    <Input name="email" type="email" placeholder="E-mail" onChange={handleChange}/>
                    <Input name="whatsapp" placeholder="WhatsApp" onChange={handleChange}/>
                    <FormAddress>
                        <Input name="city" placeholder="Cidade" onChange={handleChange}/>
                        <Input name="uf" width={80} marginLeft={4} placeholder="UF" onChange={handleChange}/>
                    </FormAddress>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default Register;
