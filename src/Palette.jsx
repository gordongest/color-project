import React from 'react';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import './Palette.css';

const Palette = ({ colors, emoji, id, paletteName }) => {
    const colorBoxes = colors.map(color =>
        <ColorBox background={color.color} name={color.name} key={uuid()}/>
    )

    return (
        <div className="Palette">
            <div className="Palette-colors">
                {colorBoxes}
            </div>

        </div>
    )
}

export default Palette;