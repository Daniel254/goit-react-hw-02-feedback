import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <button onClick={this.props.onClick} name={this.props.name}>
        {this.props.children}
      </button>
    );
  }
}
