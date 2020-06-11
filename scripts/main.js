const one = document.getElementById('one');
const two = document.getElementById('two');

const gradient = document.getElementById('gradient');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
fixCanvasUgliness(canvas);

const linearColors = ['#ffffff', '#ffffff'];

one.addEventListener('change', e => draw(e, 0))
two.addEventListener('change', e => draw(e, 1))
