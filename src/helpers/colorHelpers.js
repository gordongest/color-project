import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = hexColor => {
    const end = '#fff';

    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ];
}

const getScale = (hexColor, numColors) =>
    chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numColors);


const generatePalette = ({ paletteName, id, emoji, colors }) => {
    const newPalette = {
        paletteName,
        id,
        emoji,
        colors: {}
    };

    for (let level of levels) {
       newPalette.colors[level] = [];
    }

    for (let color of colors) {
        const scale = getScale(color.color, 10).reverse();

        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(' ', '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            })
        }
    }

    return newPalette;
}

const generateSingleColorPalette = (colors, colorId) =>
    Object.values(colors).reduce((palette, levels) => {
        palette = palette.concat(levels.filter(color =>
            color.id === colorId
        ));

        return palette;
    }, []).slice(1);

export { generatePalette, generateSingleColorPalette };
