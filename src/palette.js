import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = ({ colors }) => {

  const colorBoxes = colors.map(color => <ColorBox background={color.color} name={color.name} />)

  return (
    <div className="palette">
      {/* navbar */}
      <div className="palette-colors">
        {colorBoxes}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;