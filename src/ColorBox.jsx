import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import './ColorBox.css';

const ColorBox = ({ background, name, seeMoreUrl }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCopy = () => {
        setIsSelected(true);
        setTimeout(() => setIsSelected(false), 1500);
    }

    const handleClick = e => {
        e.stopPropagation();
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
            <Link to={seeMoreUrl} onClick={handleClick}>
                <span className="see-more">more</span>
            </Link>
        </div>
    )
}

export default ColorBox;