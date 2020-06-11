// takes in [h, s, l], returns [x, y, z]
function HSLtoXYZ(color) {
  return [
    color[1] * Math.cos(2*Math.PI*color[0]),
    color[1] * Math.sin(2*Math.PI*color[0]),
    color[2],
  ];
}

function XYZtoHSL(color) {
  let hue = Math.atan2(color[1], color[0]) / (2*Math.PI);
  if (hue < 0) hue++;
  return [
    hue,
    Math.sqrt(color[0]**2 + color[1]**2),
    color[2],
  ];
}
