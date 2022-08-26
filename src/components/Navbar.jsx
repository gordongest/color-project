import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';

const Navbar = ({ level, changeLevel, format, setFormat, allColors }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = e => {
        setFormat(e.target.value);
        setIsOpen(true);
    }

    const handleClose = () => setIsOpen(false);

    return (
        <header className="Navbar">
            <div className="logo">
                <Link to="/">reactcolorpicker</Link>
            </div>
            {allColors &&
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
            }
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