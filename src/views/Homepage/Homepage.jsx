import React from 'react';
import { Container, HomeBanner, Body } from './styles';

const HomePage = (props) => {
    return (
        <Container className='main-wrapper'>
            <HomeBanner/>
            <Body>
                <p>Hello</p>

            </Body>
        </Container>
    )
}
export default HomePage;