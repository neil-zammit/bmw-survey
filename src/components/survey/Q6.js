import React, { Component } from 'react';

export class Q6 extends Component {
  validateDrifting = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validation
    if (
      this.props.values.drifting === '' ||
      this.props.values.drifting === 'default'
    ) {
      alert('Select option from dropdown');
    } else {
      // Continue
      console.log(this.props.values.drifting);
      this.props.nextQuestion();
    }
  };

  render() {
    const { values, handleSelectChange } = this.props;
    return (
      <div className="question-container">
        <h1>Do you care about drifting?</h1>
        <div className="form-container">
          <form>
            {/* <label>Do you care about drifting?</label> */}
            <select
              name="drifting"
              onChange={handleSelectChange('drifting')}
              defaultValue={values.drifting}
            >
              <option value="default">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
            <button className="btn" onClick={this.validateDrifting}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q6;
