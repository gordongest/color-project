import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Palette from './Palette';
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette, generateSingleColorPalette } from "./colorHelpers";
import seedColors from "./seedColors";
import './App.css';

const App = () => {
    const findPalette = id => seedColors.find(palette => palette.id === id);

    const WrappedPalette = () => {
        const { id } = useParams();
        return <Palette {...generatePalette(findPalette(id))} />;
    };

    const WrappedSingleColorPalette = () => {
        const { paletteId, colorId } = useParams();
        const { colors, paletteName, emoji } = generatePalette(findPalette(paletteId));
        const shades = generateSingleColorPalette(colors, colorId);

        return <SingleColorPalette shades={shades} paletteName={paletteName} emoji={emoji} />;
    }

    return (
        <Routes>
            <Route exact path="/"
                   element={<PaletteList palettes={seedColors}/>}
            />
            <Route
                exact path="/palette/:id"
                element={<WrappedPalette />}
            />
            <Route
                exact path="/palette/:paletteId/:colorId"
                element={<WrappedSingleColorPalette />}
            />
        </Routes>
    )
}

export default App;