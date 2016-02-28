/*
fizzbuzz 2

modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those
*/
for (i = 1; i < 101; i ++) {
    if (i % 3 === 0 && i % 5 === 0){
    console.log ("fizzbuzz");
    } else if (i % 3 === 0 ) {
    console.log( "fizz");
    } else if (i % 5 === 0) {
    console.log("buzz");
    } else {
    console.log (i);
    }
}
