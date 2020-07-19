import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Content, Form } from './styles';

const SignupPage = (props) => {

    const [email, setEmail] = useState('');

    const [state, setState ] = useState('');

    const [zipCode, setZipCode] = useState('');
    
    const [password, setPassword] = useState('');

    const [secondPassword, setSecondPassword] = useState('');

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
                <h1>Create a New Account</h1>
                <Form onSubmit={e => onSubmitLogin(e)}>
                    <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <div>
                    <select name="cars" id="cars">
                        <option value="volvo">State</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type='text' placeholder='Zip code' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    <input type='password' placeholder='Confirm password' value={secondPassword} onChange={e => setSecondPassword(e.target.value)}></input>
                    <button type='submit'>Sign Up</button>
                </Form>
                <Link to='/'>Sign in</Link>
            </Content>
        </Container>
    )
}

export default SignupPage;