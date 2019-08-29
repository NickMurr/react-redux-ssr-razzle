import React from 'react';
import logo from './react.svg';

import './Home.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

const HomeWrap = styled.div`
  .Home-header {
    background: green;
  }
`;
const HomeHead = styled.div``;

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <HomeWrap className="Home">
        <HomeHead className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzles</h2>
        </HomeHead>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or{' '}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
          <Button>StyledComponent button</Button>
          <Link to="/about">About</Link>
        </ul>
      </HomeWrap>
    );
  }
}

export default Home;
