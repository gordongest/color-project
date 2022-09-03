import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import '../styles/Palette.css';

const Palette = ({ colors, id, paletteName, emoji }) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const colorBoxes = colors[level].map(color =>
        <ColorBox
            background={color[format]}
            name={color.name}
            fullPalette
            seeMoreUrl={`/palette/${id}/${color.id}`}
            key={uuid()}
        />
    )

    return (
        <div className="Palette">
            <Navbar
                level={level}
                changeLevel={setLevel}
                format={format}
                setFormat={setFormat}
                allColors
            />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default Palette;