import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@mui/styles";
import { v4 as uuid } from 'uuid';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';

const styles= {
    root: {
        display: "flex",
        height: "100vh",
        width: "100%"
    },
    colorBox: {
        height: "100%",
        width: "20%"
    }
}

const SingleColorPalette = ({ shades, paletteId, paletteName, emoji, classes }) => {
    const [format, setFormat] = useState('hex');

    const shadeMap = shades.map(shade =>
            <ColorBox
                name={shade.name}
                background={shade[format]}
                showLink={false}
                key={uuid()}
            />
        )

    return (
        <div className="SingleColorPalette Palette">
            <Navbar
                format={format}
                setFormat={setFormat}
            />
            <div className="Palette-colors">
                {shadeMap}
                <div className="go-back ColorBox">
                    <Link to={`/palette/${paletteId}`} className="back-button">
                        <span>go back</span>
                    </Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette);