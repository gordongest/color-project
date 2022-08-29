import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';
import '../styles/SingleColorPalette.css';

const SingleColorPalette = ({ shades, paletteId, paletteName, emoji }) => {
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

export default SingleColorPalette;