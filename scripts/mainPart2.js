const fig2 = document.getElementById('fig2');
fixCanvasUgliness(fig2);
const fig2colors = goodHSLpath(['#803552', '#1c7557'].map(HEXtoHSL), fig2.height);
drawLines(fig2colors, fig2.width, fig2.getContext('2d'));

const fig5 = document.getElementById('fig5');
fixCanvasUgliness(fig5);
const fig5colors = naiveHSLpath(['#ff0000', '#ff0001'].map(HEXtoHSL), fig5.height);
drawLines(fig5colors, fig5.width, fig5.getContext('2d'));

const fig3 = document.getElementById('fig3');
fixCanvasUgliness(fig3);
const fig3colors = naiveHSLpath([[0, 0, .5], [.9, 1, .5]], fig3.height);
drawLines(fig3colors, fig3.width, fig3.getContext('2d'));

const fig4 = document.getElementById('fig4');
fixCanvasUgliness(fig4);
const fig4colors = naiveHSLpath([[.9, 0, .5], [.9, 1, .5]], fig4.height);
drawLines(fig4colors, fig4.width, fig4.getContext('2d'));

///////////////////////////////

function draw(event, index) {
  linearColors[index] = event.target.value;
  gradient.style.background =
    `linear-gradient(0deg, ${linearColors[1]}, ${linearColors[0]})`;

  const allColors = goodHSLpath(linearColors.map(HEXtoHSL), canvas.height);
  drawLines(allColors, canvas.width, ctx);
}
