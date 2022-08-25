import React from 'react';
import { withStyles } from "@mui/styles";
import { v4 as uuid } from 'uuid';
import ColorBox from "./ColorBox";

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

const SingleColorPalette = ({ shades, classes }) => {
    const shadeMap = shades.map(shade =>
            <ColorBox
                name={shade.name}
                background={shade.hex}
                showLink={false}
                key={uuid()}
            />
        )

    return (
        <div className="Palette">
            <h1>Single Color Palette</h1>
            <div className="Palette-colors">
                {shadeMap}
            </div>
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette);