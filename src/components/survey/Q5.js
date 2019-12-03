import React, { Component } from 'react';

export class Q5 extends Component {
  validateDrivetrain = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validation
    if (
      this.props.values.drivetrain === '' ||
      this.props.values.drivetrain === 'default'
    ) {
      alert('Select drivetrain from dropdown');
    } else {
      // Continue
      console.log(this.props.values.drivetrain);
      this.props.nextQuestion();
    }
  };

  render() {
    const { values, handleSelectChange } = this.props;
    return (
      <div className="question-container">
        <h1>Which drivetrain do you prefer?</h1>
        <div className="form-container">
          <form>
            {/* <label>Which drivetrain do you prefer?</label> */}
            <select
              name="drivetrain"
              onChange={handleSelectChange('drivetrain')}
              defaultValue={values.drivetrain}
            >
              <option value="default">Select Option</option>
              <option value="fwd">FWD</option>
              <option value="rwd">RWD</option>
              <option value="idk">I don't know</option>
            </select>
            <br />
            <button className="btn" onClick={this.validateDrivetrain}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q5;
