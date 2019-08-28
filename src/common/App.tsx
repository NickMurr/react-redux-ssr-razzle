import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import './App.scss';
import logo from './react.svg';
import About from './components/About';
import Counter from './components/counter';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store';

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
`;

const HomeLogo = styled.img`
  animation: Home-logo-spin infinite 20s linear;
  height: 80px;
  width: auto;
`;
const HomeHeader = styled.div`
  display: grid;
  text-align: center;
  align-self: center;
  justify-self: center;
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

const App = () => (
  <Provider store={configureStore()}>
    <div className="Home">
      <HomeHeader>
        <div>
          <HomeLogo src={logo} alt="logo" />
        </div>
        <h2>Welcome to Razzles</h2>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Links>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/counter">Counter</Link>
          </Links>
        </div>
      </HomeHeader>

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/counter" component={Counter} />
      </Switch>
    </div>
  </Provider>
);

export default App;
