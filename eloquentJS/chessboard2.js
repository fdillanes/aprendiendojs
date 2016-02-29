/*
Chess board 2

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var blanca = " ";
var negra = "#";
var linea = "";
var size = 4;
for (t = 0; t < (size / 2); t++){
    for (i = 0; i < (size / 2); i++){
        linea = linea + blanca;
        linea = linea + negra;
    }
    console.log(linea, "\n");
    linea = "";
    for (j = 0; j < (size / 2); j++){
        linea = linea + negra;
        linea = linea + blanca;
    }
    console.log(linea, "\n");
    linea = "";
}
