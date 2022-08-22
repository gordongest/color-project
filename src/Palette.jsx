import React from 'react';

const Palette = ({ colors, emoji, id, paletteName }) =>
    <div className="Palette">
        <h1>Palette</h1>
        <div className="Palette-colors">
            <p>
                {emoji}
            </p>
        </div>

    </div>

export default Palette;