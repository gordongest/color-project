import React from 'react';
import { v4 as uuid } from 'uuid';
import MiniPalette from "./MiniPalette";
import '../styles/PaletteList.css';

const PaletteList = ({ palettes }) => {
    const paletteMap = palettes.map(palette =>
        <MiniPalette {...palette} key={uuid()}/>
    )

    return (
        <div className="root">
            <div className="container">
                <nav className="nav">
                    <h1>React Colors</h1>
                </nav>
                <div className="palettes">
                    {paletteMap}
                </div>
            </div>
        </div>
    )
}

export default PaletteList;