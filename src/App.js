import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import './App.css';

const App = () => {
    return (
        <div>
            <Palette colors={generatePalette(seedColors[4]).colors}/>
        </div>
    )
}


export default App;
