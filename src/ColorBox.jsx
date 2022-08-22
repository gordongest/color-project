import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import './ColorBox.css';

const ColorBox = ({ background, name }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCopy = () => {
        setIsSelected(true);
        setTimeout(() => setIsSelected(false), 1500);
    }

    return (
        <div className="ColorBox" style={{ background }}>
            <div className={`copy-overlay ${isSelected && 'show'}`} style={{ background }} />
            <div className={`copy-message ${isSelected && 'show'}`}>
                <h1>copied!</h1>
                <p>{background}</p>
            </div>
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <CopyToClipboard text={background} onCopy={handleCopy}>
                    <button className="copy-button">copy</button>
                </CopyToClipboard>
            </div>
            <span className="see-more">more</span>
        </div>
    )
}

export default ColorBox;