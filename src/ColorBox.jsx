import React from 'react';
import './ColorBox.css';

const ColorBox = ({ background, name }) =>
    <div className="ColorBox" style={{background: background}}>
        <span>{name}</span>
    </div>

export default ColorBox;