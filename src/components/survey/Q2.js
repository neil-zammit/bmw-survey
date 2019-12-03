import React, { Component } from 'react';
import './survey.css';

export class Q2 extends Component {
  // IMPLEMENT METHOD THAT SAVES USER INPUT

  validateGender = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validation
    if (
      this.props.values.gender === '' ||
      this.props.values.gender === 'default'
    ) {
      alert('Select gender from dropdown');
    } else {
      // Continue
      console.log(this.props.values.gender);
      this.props.nextQuestion();
    }
  };

  render() {
    const { values, handleSelectChange } = this.props;
    return (
      <div className="question-container">
        <h1>Select Gender:</h1>
        <div className="form-container">
          <form>
            {/* <label>Select Gender:</label> */}
            <select
              name="gender"
              onChange={handleSelectChange('gender')}
              defaultValue={values.gender}
            >
              <option value="default">Select Option</option>
              <option value="male">M</option>
              <option value="female">F</option>
              <option value="other">Other</option>
            </select>
            <br />
            <button className="btn" onClick={this.validateGender}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q2;
