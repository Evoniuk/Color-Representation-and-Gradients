function drawLines(colors, lineWidth, ctx) {
  let lineStart = 0;
  while (lineStart < colors.length) {
    ctx.beginPath();
    ctx.moveTo(0, lineStart);
    ctx.lineTo(lineWidth, lineStart);
    ctx.strokeStyle = `${colors[lineStart]}`;
    ctx.stroke();
    lineStart++;
  }
}

function fixCanvasUgliness(canvas) {
  const styleHeight = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  const styleWidth  = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  canvas.setAttribute('height', styleHeight * window.devicePixelRatio);
  canvas.setAttribute('width',  styleWidth  * window.devicePixelRatio);
}
