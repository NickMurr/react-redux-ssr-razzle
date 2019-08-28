import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.scss';
import About from './components/About';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about" component={About} />
  </Switch>
);

export default App;
