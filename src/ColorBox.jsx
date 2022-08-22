import React from 'react';
import './ColorBox.css';

const ColorBox = ({ background, name }) =>
    <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
            <div className="box-content">
                <span>{name}</span>
            </div>
            <button className="copy-button">copy</button>
        </div>
        <span className="see-more">more</span>
    </div>

export default ColorBox;