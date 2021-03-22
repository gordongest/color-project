import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class ColorBox extends Component {
  render() {
    const { background, name } = this.props;

    return(
      <CopyToClipboard text={background}>
        <div className="color-box" style={{ background }}>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="more">more</span>
        </div>
      </CopyToClipboard>
    );
  }
}