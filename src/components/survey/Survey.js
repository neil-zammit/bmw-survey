import React from 'react';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Q7 from './Q7';
import Q8 from './Q8';

class Survey extends React.Component {
  // Properties to store form inputs and Question number stored in state
  state = {
    question: 1,
    age: '',
    gender: '',
    license: '',
    firstCar: '',
    drivetrain: '',
    drifting: '',
    bmwCount: '',
    model: []
  };

  // Proceed to next question
  nextQuestion = () => {
    // State Destructuring
    const { question } = this.state;
    this.setState({
      question: question + 1
    });
  };

  // Method to skip bonus Q4 if user aged over 25
  skipQuestion = () => {
    this.setState({
      question: 5
    });
  };

  // End Survey Message 1
  endSurvey = () => {
    this.setState({
      question: 9
    });
  };

  // End Survey Message 2
  endSurveyB = () => {
    this.setState({
      question: 10
    });
  };

  // Handle input field changes for questions with input element and update state
  handleInputChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // Handle select field changes for questions with select element and update state
  handleSelectChange = select => e => {
    this.setState({ [select]: e.target.value });
  };

  // Handle select field changes for question 8 and update state + validation
  handleArrayChange = input => e => {
    // Validate Pattern 1
    if (e.target.value.length === 3 && !isNaN(e.target.value)) {
      // Spread operator allows an array to be expanded where 0 or more args
      // or elements are expected.
      this.setState({ [input]: [...this.state.model, e.target.value] });
      return;
      // Validate Pattern 2
    } else if (
      e.target.value.length === 2 &&
      e.target.value.charAt(0) === 'Z' &&
      !isNaN(e.target.value.charAt(1))
    ) {
      this.setState({ [input]: [...this.state.model, e.target.value] });
      return;
      // Validate Pattern 2
    } else if (
      e.target.value.length === 2 &&
      e.target.value.charAt(0) === 'X' &&
      !isNaN(e.target.value.charAt(1))
    ) {
      this.setState({ [input]: [...this.state.model, e.target.value] });
      return;
    } else {
      alert('The model entered does not exist.');
      console.log(e.target.value);
    }
  };

  render() {
    // State Destructuring
    const {
      question,
      age,
      gender,
      license,
      firstCar,
      drivetrain,
      drifting,
      bmwCount,
      model
    } = this.state;

    // Values to be passed as props
    const values = {
      age,
      gender,
      license,
      firstCar,
      drivetrain,
      drifting,
      bmwCount,
      model
    };

    // Switch Statement
    // Render questions, passing in props to each question component
    switch (question) {
      case 1:
        return (
          <Q1
            nextQuestion={this.nextQuestion}
            endSurvey={this.endSurvey}
            handleInputChange={this.handleInputChange}
            values={values}
          />
        );
      case 2:
        return (
          <Q2
            nextQuestion={this.nextQuestion}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        );
      case 3:
        return (
          <Q3
            nextQuestion={this.nextQuestion}
            endSurvey={this.endSurvey}
            skipQuestion={this.skipQuestion}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        );
      case 4:
        return (
          <Q4
            nextQuestion={this.nextQuestion}
            endSurveyB={this.endSurveyB}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        );
      case 5:
        return (
          <Q5
            nextQuestion={this.nextQuestion}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        );
      case 6:
        return (
          <Q6
            nextQuestion={this.nextQuestion}
            handleSelectChange={this.handleSelectChange}
            values={values}
          />
        );
      case 7:
        return (
          <Q7
            nextQuestion={this.nextQuestion}
            handleInputChange={this.handleInputChange}
            endSurvey={this.endSurvey}
            values={values}
          />
        );
      case 8:
        return (
          <Q8
            nextQuestion={this.nextQuestion}
            handleArrayChange={this.handleArrayChange}
            values={values}
          />
        );
      case 9:
        // End Survey and save survey data (state) to local storage
        return (
          <div className="message-container">
            <h1>End Of Survey</h1>
            <p>Thank you for your interest in helping BMW.</p>
            {this.props.testMethod()}
            {console.log(this.state)}
            {localStorage.setItem('state', JSON.stringify(this.state))}
          </div>
        );
      case 10:
        // End Survey and save survey data (state) to local storage
        return (
          <div className="message-container">
            <h1>End Of Survey</h1>
            <p>
              We are targeting more experienced clients, thank you for your
              interest.
            </p>
            {console.log(this.state)}
            {localStorage.setItem('state', JSON.stringify(this.state))}
          </div>
        );

      // Prevent default case error, look into this
      default:
    }
  }
}

export default Survey;
