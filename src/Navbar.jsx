import React from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@mui/material';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, format, setFormat }) => {
    const handleChange = e => {
        setFormat(e.target.value);
    }

    return (
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
            <div className="select-container">
                <Select value={format} onChange={handleChange}>
                    <MenuItem value="hex">HEX</MenuItem>
                    <MenuItem value="rgb">RGB</MenuItem>
                    <MenuItem value="rgba">RGBA</MenuItem>
                </Select>
            </div>
        </header>
    )
}

export default Navbar;