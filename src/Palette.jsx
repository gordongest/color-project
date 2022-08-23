import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { v4 as uuid } from 'uuid';
import './Palette.css';

const Palette = ({ colors }) => {
    const [level, setLevel] = useState(500);

    const changeLevel = newLevel => setLevel(newLevel);

    const changeFormat = e => {
        alert(e.target.value);
    }

    const colorBoxes = colors[level].map(color =>
        <ColorBox background={color.hex} name={color.name} key={uuid()}/>
    )

    return (
        <div className="Palette">
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat}/>
            <div className="Palette-colors">
                {colorBoxes}
            </div>

        </div>
    )
}

export default Palette;