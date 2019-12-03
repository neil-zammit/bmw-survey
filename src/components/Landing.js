// Parent Component to Survey and Stats Components

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Survey from './survey/Survey';
import Stats from './statistics/Stats';
import './landing.css';

class Landing extends React.Component {
  // State updated with data passed from Survey child component
  state = {
    data: ''
  };

  // Class method that fetches data from Survey child component
  getStateFromChild(stateFromChild) {
    this.setState(stateFromChild);
    console.log(`State is: ${this.state}`);
  }

  // Test method to be passed as child
  testMethod() {
    console.log('This a test from parent');
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <h1>Welcome to BMW Survey</h1>
                <p className="landing-text">
                  Please select from the following options:
                </p>
                <Link to="/survey" className="main-btn">
                  Take Survey
                </Link>
                <Link to="/stats" className="main-btn">
                  View Statistics
                </Link>
              </React.Fragment>
            )}
          />
          {/* <Route path="/survey" component={Survey} /> */}
          <Route
            path="/survey"
            render={props => (
              <Survey
                {...props}
                testMethod={this.testMethod}
                getStateFromChild={this.getStateFromChild}
              />
            )}
          />
          <Route path="/stats" component={Stats} />
        </Router>
      </div>
    );
  }
}

// Style
// const btn = {
//   margin: '1rem',
//   textDecoration: 'none',
//   color: '#fff',
//   backgroundColor: '#009ada',
//   padding: '10px',
//   borderRadius: '10px'
// };

export default Landing;
