import React from 'react';
import { Container, HomeBanner, WeatherContainer, Body } from './styles';

const HomePage = (props) => {
    return (
        <Container className='main-wrapper'>
            <HomeBanner/>
            <WeatherContainer>Weather Container here
            </WeatherContainer>
            <Body>
                <p>Hello</p>

            </Body>
        </Container>
    )
}
export default HomePage;