import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

const Palette = ({ palette }) => {

  const [ level, setLevel ] = useState(500);

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox background={color.hex} name={color.name} />
  });

  return (
    <div className="palette">
      <Navbar level={level} setLevel={setLevel} />
      <div className="palette-colors">
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;