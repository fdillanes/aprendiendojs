/* Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

function isEven(n) {
    if (n < 0){
        return undefined;
    } else if (n == 0){
        return true;
    } else if (n == 1){
        return false;
    } else {
        n -= 2;
        return isEven(n);
    }
}

console.log (isEven(50));
console.log (isEven(75));
console.log(isEven(-1));
