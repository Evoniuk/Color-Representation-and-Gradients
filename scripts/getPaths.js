// takes in two HSL colors, return HEX
function naiveHSLpath(colors, number) {
  return linearPath(colors, number).map(HSLtoHEX);
}

// takes in two colors with three channels each
function linearPath(colors, number) {
  const toAdd = i => (colors[1][i] - colors[0][i]) / number;
  const [channel0, channel1, channel2] = [toAdd(0), toAdd(1), toAdd(2)];

  const add = color => [
    color[0] + channel0,
    color[1] + channel1,
    color[2] + channel2,
  ];

  const result = [colors[0]];
  for (let i = 1; i < number; i++)
    result.push(add(result[i - 1]));

  return result;
}

// takes in two HSL colors, return HEX
function goodHSLpath(colors, number) {
  fixGrayscales(colors);

  if (Math.abs(colors[0][0] - colors[1][0]) <= .5)
    return naiveHSLpath(colors, number);

  const toAdd = i => (colors[1][i] - colors[0][i]) / number;
  const toAddHue = colors[0][0] < colors[1][0] ?
    (colors[1][0] - colors[0][0] - 1) / number:
    (colors[1][0] - colors[0][0] + 1) / number;
  const [hueToAdd, saturationToAdd, lightnessToAdd] = [toAddHue, toAdd(1), toAdd(2)];

  const add = HSLcolor => [
    HSLcolor[0] + hueToAdd,
    HSLcolor[1] + saturationToAdd,
    HSLcolor[2] + lightnessToAdd,
  ];

  const result = [colors[0]];
  for (let i = 1; i < number; i++) {
    result.push(add(result[i - 1]));
    if      (result[i][0] < 0) result[i][0]++;
    else if (result[i][0] > 1) result[i][0]--;
  }

  return result.map(HSLtoHEX);
}

function fixGrayscales(colors) {
  // if gray. white, or black set hues equal
  if (colors[0][1] === 0 || colors[0][2] === 0 || colors[0][2] === 1)
    colors[0][0] = colors[1][0];
  else if (colors[1][1] === 0 || colors[1][2] === 0 || colors[1][2] === 1)
    colors[1][0] = colors[0][0];

  // if white or black set hues and sats equal
  if (colors[0][2] === 0 || colors[0][2] === 1)
    colors[0][1] = colors[1][1];
  else if (colors[1][2] === 0 || colors[1][2] === 1)
    colors[1][1] = colors[0][1];
}

function makeXYZpath(colors, number) {
  colors = colors.map(HEXtoHSL).map(HSLtoXYZ);
  const path = linearPath(colors, number);
  return path.map(XYZtoHSL).map(HSLtoHEX);
}
