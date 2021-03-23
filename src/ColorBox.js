import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ background, name }) => {

  const [ copied, setCopied ] = useState(false);

  const copyClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="color-box" style={{ background }}>
      <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />
      <div className={`copy-message ${copied && "show"}`}>
        <h1>copied!</h1>
        <p>{background}</p>
      </div>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <CopyToClipboard onCopy={copyClick} text={background}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
      <span className="more">more</span>
    </div>
  );
};

export default ColorBox;