import React, { Component } from 'react';

export class Q4 extends Component {
  validatefirstCar = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validation
    if (
      this.props.values.firstCar === '' ||
      this.props.values.firstCar === 'default'
    ) {
      alert('Select option from Drop Down');
    } else {
      if (this.props.values.firstCar === 'no') {
        // Continue
        this.props.nextQuestion();
      } else {
        // End Survey
        this.props.endSurveyB();
      }
    }
  };

  render() {
    const { values, handleSelectChange } = this.props;
    return (
      <div className="question-container">
        <h1>Is this your first car?</h1>
        <div className="form-container">
          <form>
            {/* <label>Is this your first car?</label> */}
            <select
              name="firstCar"
              onChange={handleSelectChange('firstCar')}
              defaultValue={values.firstCar}
            >
              <option value="default">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
            <button className="btn" onClick={this.validatefirstCar}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q4;
