// takes in a hex color of the form '#xxxxxx' and returns and array [H, S, L]
function HEXtoHSL(color) {
  // hex to rgb
  const colors = [0, 0, 0].map((_, i) =>
    parseInt(color.substring(i*2 + 1, i*2 + 3), 16));

  const [max, min] = [Math.max(...colors), Math.min(...colors)];

  return [
    getHue(colors, max, min),
    getSaturation(max, min),
    (max + min) / 510,
  ];
}

function getHue(colors, max, min) {
  if (max === min) return 0;

  const [red, green, blue] = colors;
  const value =
    max === red   ? (green - blue) / (max - min):
    max === green ? (blue - red)   / (max - min) + 2:
                    (red - green)  / (max - min) + 4;

  return value < 0 ? value/6 + 1 : value/6;
}

function getSaturation(max, min) {
  return max === min ? 0 :
    max + min > 255 ? (max - min) / (510 - max - min):
    (max - min) / (max + min);
}
