import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { v4 as uuid } from 'uuid';
import './Palette.css';

const Palette = ({ colors, paletteName, emoji }) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const colorBoxes = colors[level].map(color =>
        <ColorBox background={color[format]} name={color.name} key={uuid()}/>
    )

    return (
        <div className="Palette">
            <Navbar
                level={level}
                changeLevel={setLevel}
                format={format}
                setFormat={setFormat}
            />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <footer className="Palette-footer">
                {paletteName}
                <span className="emoji">{emoji}</span>
            </footer>
        </div>
    )
}

export default Palette;