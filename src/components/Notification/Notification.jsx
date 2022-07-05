import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Notification extends Component {
  static propTypes = { message: PropTypes.string };

  render() {
    return this.props.message && <p>{this.props.message}</p>;
  }
}
