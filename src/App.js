import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import SignupPage from './views/SignupPage/SignupPage';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component={SignupPage}/>
      </Switch>
    </div>
  );
}

export default App;
