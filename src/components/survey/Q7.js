import React, { Component } from 'react';

export class Q7 extends Component {
  validateBmwCount = e => {
    // Prevent Form Submission
    e.preventDefault();
    console.log(this.props.values.bmwCount);
    // Validation
    if (this.props.values.bmwCount !== '' && 0 <= this.props.values.bmwCount) {
      // Continue
      this.props.nextQuestion();
      console.log(this.props.values.bmwCount);
    } else {
      alert('Invalid Input: Enter the number of BMWs you drove');
    }
  };

  render() {
    const { values, handleInputChange } = this.props;
    return (
      <div className="question-container">
        <h1>How many BMWs did you drive?</h1>
        <div className="form-container">
          <form>
            {/* <label>How many BMWs did you drive?</label> */}
            <input
              type="number"
              min="0"
              name="bmwCount"
              placeholder="Enter number here"
              onChange={handleInputChange('bmwCount')}
              defaultValue={values.bmwCount}
              required
            />
            <br />
            <button className="btn" onClick={this.validateBmwCount}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q7;
