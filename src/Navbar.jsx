import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { v4 as uuid} from 'uuid';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, format, setFormat }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = e => {
        setFormat(e.target.value);
        setIsOpen(true);
    }

    const handleClose = () => setIsOpen(false);

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
                <Select value={format} onChange={handleSelect}>
                    <MenuItem value="hex">HEX</MenuItem>
                    <MenuItem value="rgb">RGB</MenuItem>
                    <MenuItem value="rgba">RGBA</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                open={isOpen}
                onClose={handleClose}
                autoHideDuration={2000}
                message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
                ContentProps={{"aria-describedby":"message-id"}}
                action={[
                    <IconButton onClick={handleClose} color="inherit" key="close" aria-label="close">
                        <Close />
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default Navbar;