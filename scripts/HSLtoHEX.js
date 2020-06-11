// takes in [h, s, l], returns [r, g, b]
function HSLtoHEX(color) {
  const [hue, saturation, lightness] = color;

  if (saturation === 0)
    return RGBtoHEX([255, 255, 255].map(color => Math.round(color*lightness)));

  const temp1 = lightness < .5 ?
    lightness * (1 + saturation):
    lightness + saturation * (1 - lightness);

  const temp2 = 2*lightness - temp1;

  const tempR = (hue + 1/3) % 1;
  const tempG = hue;
  const tempB = hue < 1/3 ? hue + 2/3: hue - 1/3;

  const getColor = tempColor =>
    6*tempColor < 1 ? temp2 + 6*(temp1 - temp2) * tempColor:
    2*tempColor < 1 ? temp1:
    3*tempColor < 2 ? temp2 + (temp1 - temp2) * (4 - 6*tempColor):
    temp2;

  return RGBtoHEX([
    Math.round(255*getColor(tempR)),
    Math.round(255*getColor(tempG)),
    Math.round(255*getColor(tempB)),
  ])
}

// takes [red, green, blue], returns '#xxxxxx'
function RGBtoHEX(color) {
  const hexNumbers = color.map(value => value < 16 ?
    '0' + value.toString(16): value.toString(16)
  );
  return `#${hexNumbers[0]}${hexNumbers[1]}${hexNumbers[2]}`
}
