import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<h1>palette goes here</h1>}/>
            <Route exact path="/palette/:id" element={<Palette palette={generatePalette(seedColors[4])}/>}>
                {/*<div>*/}
                {/*    <Palette palette={generatePalette(seedColors[4])}/>*/}
                {/*</div>*/}
            </Route>
        </Routes>
    )
}


export default App;
