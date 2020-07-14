import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      
      </Switch>
    </div>
  );
}

export default App;
