/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/
var blanca = " ";
var negra = "#";
var linea = "";
for (t = 0; t < 4; t++){
    for (i = 0; i < 4; i++){
        linea = linea + blanca;
        linea = linea + negra;
    }
    console.log(linea, "\n");
    linea = "";
    for (j = 0; j < 4; j++){
        linea = linea + negra;
        linea = linea + blanca;
    }
    console.log(linea, "\n");
    linea = "";
}
