// Survey Statistics for Employees
import React from 'react';

class Stats extends React.Component {
  state = {
    state: []
  };

  // componentDidMount() {
  //   const surveyData = localStorage.state;
  //   // const parsedData = JSON.parse(surveyData);
  // }

  returnSurveyData = () => {
    const surveyData = localStorage.state;
    const parsedData = JSON.parse(surveyData);
    console.log(parsedData);
  };

  render() {
    return (
      <div>
        <h1 style={title}>Survey Statistics</h1>
        <p>Stats 1</p>
        {this.returnSurveyData()}
        {localStorage.state}
      </div>
    );
  }
}

// Style
const title = {
  marginTop: '50px'
};
export default Stats;
