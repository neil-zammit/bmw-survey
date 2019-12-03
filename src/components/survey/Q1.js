import React, { Component } from 'react';
import './survey.css';

export class Q1 extends Component {
  // IMPLEMENT METHOD THAT SAVES USER INPUT

  // Validate age input
  validateAge = e => {
    // Prevent Form Submission
    e.preventDefault();
    console.log(this.props.values.age);
    // Validation
    if (
      this.props.values.age !== '' &&
      0 <= this.props.values.age &&
      this.props.values.age <= 100
    ) {
      if (this.props.values.age < 18) {
        // End Survey
        this.props.endSurvey();
      } else {
        // Continue
        this.props.nextQuestion();
      }
    } else {
      alert('Invalid Input: Enter a number between 0 and 100');
    }
  };

  render() {
    const { values, handleInputChange } = this.props;
    return (
      <div className="question-container">
        <h1>Enter Age:</h1>
        <div className="form-container">
          <form>
            {/* <label>Enter Age:</label> */}
            <input
              type="number"
              min="0"
              max="100"
              name="age"
              placeholder="Age"
              onChange={handleInputChange('age')}
              defaultValue={values.age}
            />
            <br />
            <button className="btn" onClick={this.validateAge}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q1;
