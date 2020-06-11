const xyz = document.getElementById('xyz');
const xyzCtx = xyz.getContext('2d');
fixCanvasUgliness(xyz);

function draw(event, index) {
  linearColors[index] = event.target.value;
  gradient.style.background =
    `linear-gradient(0deg, ${linearColors[1]}, ${linearColors[0]})`;

  const allColors = goodHSLpath(linearColors.map(HEXtoHSL), canvas.height);
  drawLines(allColors, canvas.width, ctx);

  const allXYZcolors = makeXYZpath(linearColors, xyz.height);
  drawLines(allXYZcolors, xyz.width, xyzCtx);
}
