import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from 'components/FeedbackOptions/Button/Button';

export default class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        {this.props.options.map((item, index) => {
          return (
            <Button
              key={index}
              name={item}
              onClick={this.props.onLeaveFeedback}
            >
              {item}
            </Button>
          );
        })}
      </>
    );
  }
}
