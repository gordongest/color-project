import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { background } = this.props;

    return(
      <div className="color-box" style={{ background: background.color }}>
        <span>{background.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}