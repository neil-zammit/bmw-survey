import React, { Component } from 'react';

export class Q8 extends Component {
  validateModel = e => {
    // Prevent Form Submission
    e.preventDefault();
    // Validate for empty input fields
    if (this.props.values.model.length < this.props.values.bmwCount) {
      alert('Please fill in all fields to proceed.');
    } else {
      // Continue
      console.log(this.props.values.model);
      this.props.nextQuestion();
    }
  };

  renderFields = () => {
    // Array to store amount of bmws driven
    let carCount = [];
    for (let i = 0; i < this.props.values.bmwCount; i++) {
      carCount.push(i);
    }
    // List of input fields to be rendered per car driven
    const renderedInputs = carCount.map(index => (
      <input
        type="text"
        name="model"
        placeholder="model"
        className="model-input"
        key={index}
        onBlur={this.props.handleArrayChange('model')}
        defaultValue={''}
      />
    ));
    console.log(renderedInputs);
    return renderedInputs;
  };

  render() {
    return (
      <div className="question-container">
        <h1>Which BMW did you drive? </h1>
        <div className="form-container">
          <form>
            <div className="renderFieldsContainer">{this.renderFields()}</div>
            <button className="btn" onClick={this.validateModel}>
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Q8;
