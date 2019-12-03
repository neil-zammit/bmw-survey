// Parent Component to Survey and Stats Components

import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  // State updated with data passed from Survey child component
  // state = {
  //   stateFromChild: ''
  // };

  // Class method that fetches data from Survey child component
  // getStateFromChild(stateFromChild) {
  //   this.setState({
  //     state: stateFromChild
  //   });
  // }

  render() {
    return (
      <div style={header}>
        <h1>BMW Survey</h1>
        <Link to="/survey" style={link}>
          Take Survey
        </Link>
        <Link to="/stats" style={link}>
          View Statistics
        </Link>
      </div>
    );
  }
}

// Style
const header = {
  border: '1px solid #009ada',
  paddingTop: '1rem',
  width: '100%',
  backgroundColor: '#009ada',
  color: '#fff'
};

const link = {
  color: '#fff',
  textDecoration: 'none',
  margin: '1rem'
};
export default Header;
