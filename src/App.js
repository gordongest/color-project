import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import { generatePalette, generateSingleColorPalette } from './helpers/colorHelpers';
import seedColors from './helpers/seedColors';
import './styles/App.css';

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

        return <SingleColorPalette shades={shades} paletteId={paletteId} paletteName={paletteName} emoji={emoji} />;
    }

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<PaletteList palettes={seedColors}/>}
            />
            <Route
                exact
                path="/palette/new"
                element={<NewPaletteForm />}
            />
            <Route
                exact
                path="/palette/:id"
                element={<WrappedPalette />}
            />
            <Route
                exact
                path="/palette/:paletteId/:colorId"
                element={<WrappedSingleColorPalette />}
            />
        </Routes>
    )
}

export default App;