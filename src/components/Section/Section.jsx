import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <section>
        {this.props.title && <h2>{this.props.title}</h2>}
        {this.props.children}
      </section>
    );
  }
}
