import React, { Component } from 'react';
import Button from './Button/Button';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButtonHandler = e => {
    const statName = e.target.name;
    this.setState(prev => ({
      [statName]: prev[statName] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const result = totalFeedback ? (this.state.good / totalFeedback) * 100 : 0;
    return Math.floor(result, 0);
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <Button name="good" onClick={this.clickButtonHandler}>
            Good
          </Button>
          <Button name="neutral" onClick={this.clickButtonHandler}>
            Neutral
          </Button>
          <Button name="bad" onClick={this.clickButtonHandler}>
            Bad
          </Button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>
            Good: {this.state.good}
            <br />
            GoNeutralod: {this.state.neutral}
            <br />
            Bad: {this.state.bad}
            <br />
            Total: {this.countTotalFeedback()}
            <br />
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
            <br />
          </p>
        </div>
      </>
    );
  }
}
