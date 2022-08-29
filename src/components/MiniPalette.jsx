import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import '../styles/MiniPalette.css';

const MiniPalette = ({ colors, id, paletteName, emoji }) => {
    const history = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        history(`/palette/${id}`);
    }

    const colorMap = colors.map(color =>
        <div
            className="mini-color"
            style={{ backgroundColor: color.color }}
            key={uuid()}
        />
    );

    return (
        <div className="mini-color-root" onClick={handleClick}>
            <div className="mini-color-colors">
                {colorMap}
            </div>
            <h5 className="mini-color-title">
                {paletteName} <span className="mini-color-emoji">{emoji}</span>
            </h5>
        </div>
    )
}

export default MiniPalette;