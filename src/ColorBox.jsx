import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import './ColorBox.css';

const ColorBox = ({ background, name }) =>
    <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
            <div className="box-content">
                <span>{name}</span>
            </div>
            <CopyToClipboard text={background}>
                <button className="copy-button" onClick={()=> console.log('clikke')}>copy</button>
            </CopyToClipboard>
        </div>
        <span className="see-more">more</span>
    </div>

export default ColorBox;