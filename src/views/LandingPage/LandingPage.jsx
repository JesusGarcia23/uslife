import React from 'react';
import {Container, Content, Form } from './styles';

const LandingPage = () => {
    return (
        <Container>
            <Content>
                <h1>Login</h1>
                <Form>
                    <input placeholder='email'></input>
                    <input placeholder='password'></input>
                </Form>
            </Content>
        </Container>
    )
}

export default LandingPage;