import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import MainWrapper from '../MainWrapper/MainWrapper';

const CustomRoute = ({component: Component, ...rest}) => {
    console.log(rest.path)
    return (
        <Route {...rest} render={(props) => <MainWrapper {...props}><Component {...props}></Component></MainWrapper> } />
    )
}

export default CustomRoute;