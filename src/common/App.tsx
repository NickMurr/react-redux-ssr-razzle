import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.scss';
import logo from './react.svg';
import About from './components/About';

const App = () => (
  <div className="Home">
    <div className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <h2>Welcome to Razzles</h2>
    </div>

    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
