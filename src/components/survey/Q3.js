import React, { Component } from 'react';

export class Q3 extends Component {
  // IMPLEMENT METHOD THAT SAVES USER INPUT

  validateLicense = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validation
    if (
      this.props.values.license === '' ||
      this.props.values.license === 'default'
    ) {
      alert('Select license from dropdown');
    } else {
      if (this.props.values.license === 'no') {
        // End Survey
        this.props.endSurvey();
      } else {
        // Check if user eligible for bonus question
        if (this.props.values.age < 25) {
          this.props.nextQuestion();
        } else {
          this.props.skipQuestion();
        }
      }
    }
  };

  render() {
    const { values, handleSelectChange } = this.props;
    return (
      <div className="question-container">
        <h1>Do you own a car driving license?</h1>
        <div className="form-container">
          <form>
            {/* <label>Do you own a car driving license?</label> */}
            <select
              name="license"
              onChange={handleSelectChange('license')}
              defaultValue={values.license}
            >
              <option value="default">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No, I prefer using other transport </option>
            </select>
            <br />
            <button className="btn" onClick={this.validateLicense}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q3;
