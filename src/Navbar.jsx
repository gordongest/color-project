import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel }) =>
    <header className="Navbar">
        <div className="logo">
            <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
                <Slider
                    defaultValue={level}
                    step={100}
                    min={100}
                    max={900}
                    onAfterChange={changeLevel}
                />
            </div>
        </div>
    </header>

export default Navbar;