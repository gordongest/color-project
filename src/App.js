import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './helpers';

const App = () => (
  <div>
    <Palette palette={generatePalette(seedColors[4])} />
  </div>
);

export default App;