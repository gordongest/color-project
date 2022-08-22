import React, { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

const Palette = ({ colors }) => {
    const [level, setLevel] = useState(500);

    const handleChange = newLevel => setLevel(newLevel);

    const colorBoxes = colors[level].map(color =>
        <ColorBox background={color.hex} name={color.name} key={uuid()}/>
    )

    return (
        <div className="Palette">
            <Slider
                defaultValue={level}
                step={100}
                min={100}
                max={900}
                onAfterChange={handleChange}
            />
            <div className="Palette-colors">
                {colorBoxes}
            </div>

        </div>
    )
}

export default Palette;