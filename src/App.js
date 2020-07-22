import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import SignupPage from './views/SignupPage/SignupPage';
import HomePage from './views/Homepage/Homepage';
import CustomRoute from './components/CustomRoute/CustomRoute';
import NotFound from './views/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Switch>
      <CustomRoute exact path='/' component={LandingPage}></CustomRoute>
      <CustomRoute exact path='/signup' component={SignupPage}></CustomRoute>
      <CustomRoute exact path='/home' component={HomePage}></CustomRoute>
      <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
