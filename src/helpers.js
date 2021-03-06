import chroma from 'chroma-js';

const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];

const getRange = hexColor => {
  const end = "#fff";

  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
};

const generateScale = (hexColor, numberOfColors) => {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
};

const generatePalette = starterPalette => {
  let newPalette = { ...starterPalette, colors: {} };

  levels.forEach(level => newPalette.colors[level] = []);

  starterPalette.colors.forEach(color => {
    let scale = generateScale(color.color, 11).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ", 1.0")
      });
    };
  });

  return newPalette;
};

export default generatePalette;