import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import SignupPage from './views/SignupPage/SignupPage';
import HomePage from './views/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component={SignupPage}/>
      <Route exact path='/home' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
