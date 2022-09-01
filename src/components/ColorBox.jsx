import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@mui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import chroma from 'chroma-js';
import sizeHelpers from '../helpers/sizeHelpers';
import sizes from '../helpers/sizes';
import '../styles/ColorBox.css';

let styles = {
    ColorBox: {
        [sizeHelpers.down(sizes.lg)]: {
            width: "25%",
            height: props => (props.showLink && "20%")
        },
        [sizeHelpers.down(sizes.md)]: {
            width: "50%",
            height: props => (props.showLink && "10%")
        },
        [sizeHelpers.down(sizes.xs)]: {
            width: "100%",
            height: props => (props.showLink && "5%")
        }
    }
};

const ColorBox = ({ background, name, classes, showLink, seeMoreUrl }) => {
    const [isSelected, setIsSelected] = useState(false);
    const isLight = chroma(background).luminance() >= .675;
    const isDark = chroma(background).luminance() <= .08;

    const handleCopy = () => {
        setIsSelected(true);
        setTimeout(() => setIsSelected(false), 1500);
    }

    const handleClick = e => {
        e.stopPropagation();
    }

    return (
        <div className={`ColorBox ${classes.ColorBox}`} style={{ background }}>
            <div className={`copy-overlay ${isSelected && "show"}`} style={{ background }} />
            <div className={`copy-message ${isSelected && "show"}`}>
                <h1>copied!</h1>
                <p className={`${isLight && "dark-text"}`}>{background}</p>
            </div>
            <div className="copy-container">
                <div className="box-content">
                    <span className={`${isDark && "light-text"}`}>{name}</span>
                </div>
                <CopyToClipboard text={background} onCopy={handleCopy}>
                    <button className={`copy-button ${isLight && "dark-text"}`}>copy</button>
                </CopyToClipboard>
            </div>
            {showLink &&
                <Link to={seeMoreUrl} onClick={handleClick}>
                    <span className={`see-more ${isLight && "dark-text"}`}>more</span>
                </Link>
            }
        </div>
    )
}

export default withStyles(styles)(ColorBox);