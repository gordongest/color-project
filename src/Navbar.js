import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Navbar = ({ level, setLevel }) => (
  <header className="navbar">
    <div className="logo">
      <a href="/">Color Palettes</a>
    </div>
    <div className="slider">
      <Slider
        defaultValue={level}
        min={100}
        max={1000}
        step={100}
        onAfterChange={setLevel}
      />
    </div>
  </header>
);

export default Navbar;