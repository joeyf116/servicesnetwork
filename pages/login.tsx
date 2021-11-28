import type { NextPage } from 'next';
import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from '../components/auth/LoginForm';

const Login: NextPage = () => {
    return (
        <Container style={{
            maxWidth: '500px', 
            marginTop: '5vh', 
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
            background: '#f5f5f5', 
            padding: '3rem', 
            borderRadius: '5px'
            }}>
            <LoginForm />
            
        </Container>
    )
}

export default Login;