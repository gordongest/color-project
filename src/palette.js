import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

const Palette = ({ palette }) => {

  const [ level, setLevel ] = useState(500);

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox background={color.hex} name={color.name} />
  });

  return (
    <div className="palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={1000}
          step={100}
          onAfterChange={setLevel}
        />
      </div>
      {/* navbar */}
      <div className="palette-colors">
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;