/* Write a function min that takes two arguments and returns their minimum. */

var minimo = function (a, b){
    if (a === b){
        return (a | b);
    } else if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minimo(5, 10));
console.log(minimo(0, 150));
console.log(minimo(-5, 10));
console.log(minimo(-5, -10));
console.log(minimo(1.5,2.5));
