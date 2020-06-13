## Color-Representation-and-Gradients
This is an article about the representation of colors and creating gradients using such representations. [You can see it here](https://evoniuk.github.io/Color-Representation-and-Gradients/).

### The Creation of the Figures

The creation of the figures is accomplished through four main types of JavaScript files: the main files, the conversion files, the canvas drawing file, and the path creation file.

#### Main Files

`main.js` is a file to which each page has access, and consists entirely of fetching access to the relevant portions of the document that each page has. `mainPart2.js` and `mainPart3.js`are much the same, but specific to the portions of the document in those pages.

#### Conversion Files

`HEXtoHSL.js`, `HSLtoHEX.js`, and `HSLtoXYZ.js` accomplish exactly what they sound like. The implementation of `HEXtoHSL.js` and `HSLtoHEX.js` follow [the Wikipedia page on the subject](https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation), with some optimizations.

#### Drawing File

`drawCanvas.js` has two functions, one which draws all the necessary lines on the canvas.

The other function's necessity is a misfortune. The canvas element is not well implemented in any browser, and so requires some fixing if good-looking pictures are desired. I found a solution to this in [a post by Zak Frisch](https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da).

#### Path Creation File

The path creation file is certainly the most interesting, and its implementation is, for the most part, described in the article.
