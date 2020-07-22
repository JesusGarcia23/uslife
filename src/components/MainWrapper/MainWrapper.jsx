import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const MainWrapper = (props) => {
    return (
        <div class='main-wrapper'>
        {(props.match.path !== '/' && props.match.path !== '/signup') && <Navbar/>}
        {props.children}
        {(props.match.path !== '/' && props.match.path !== '/signup') && <Footer/>}
        </div>
    )
}

export default MainWrapper;