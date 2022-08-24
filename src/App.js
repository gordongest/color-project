import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Palette from './Palette';
import generatePalette from "./colorHelpers";
import seedColors from "./seedColors";
import './App.css';

const App = () => {
    const findPalette = id => seedColors.find(palette => palette.id === id);

    const PaletteComponentWrapper = () => {
        const { id } = useParams();
        return <Palette palette={generatePalette(findPalette(id))} />;
    };

    return (
        <Routes>
            <Route exact path="/" element={<PaletteList palettes={seedColors}/>}/>
            <Route
                exact path="palette/:id"
                element={<PaletteComponentWrapper />}
            />
        </Routes>
    )
}

export default App;