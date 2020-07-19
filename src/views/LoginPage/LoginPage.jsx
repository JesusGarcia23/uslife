import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Content, Form } from './styles';

const LoginPage = (props) => {

    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log("Hello")
    }

    const goToSignup = () => {
        props.history.push('/signup')
    }

    return (
        <Container>
            <Content>
                <h1>Login</h1>
                <Form onSubmit={e => onSubmitLogin(e)}>
                    <input placeholder='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button type='submit'>Log In</button>
                </Form>
                <Link to='/forgotpassword'>Forgot password?</Link>

                <button onClick={goToSignup}>Don't have an account yet? Register here</button>
            </Content>
        </Container>
    )
}

export default LoginPage;