import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Content, Form } from './styles';
import { registerAccount } from './utils/signup';

const SignupPage = (props) => {

    const [email, setEmail] = useState('');

    const [state, setState ] = useState('');

    const [zipCode, setZipCode] = useState('');
    
    const [password, setPassword] = useState('');

    const [secondPassword, setSecondPassword] = useState('');

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log("Hello")
       const user = {
            email,
            state,
            zipCode,
            password,
            secondPassword
        }

        registerAccount(user);
    }

    return (
        <Container>
            <Content>
                <h1>Create a New Account</h1>
                <Form onSubmit={e => onSubmitLogin(e)}>
                    <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <div>
                    <input type='text' placeholder='State' maxLength='2' value={state} onChange={e => setState(e.target.value)} style={{width: '30%'}}></input>
                    <input type='text' placeholder='Zip code' value={zipCode} onChange={e => setZipCode(e.target.value)}></input>
                    </div>
                    <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <input type='password' placeholder='Confirm password' value={secondPassword} onChange={e => setSecondPassword(e.target.value)}></input>
                    <button type='submit'>Register</button>
                </Form>
                <Link to='/'>Sign in</Link>
            </Content>
        </Container>
    )
}

export default SignupPage;