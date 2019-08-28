import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../react.svg';

const About = () => {
  return (
    <div>
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzles</h2>
        </div>
        <h1>About</h1>
        <ul className="Home-resources">
          <Link to="/">Home</Link>
        </ul>
      </div>
    </div>
  );
};

export default About;
