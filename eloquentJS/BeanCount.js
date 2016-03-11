/*
Bean counting
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
*/

function countBs (st) {
    var largo = st.length;
    var count = 0;
    for (i = 0; i <= largo -1; i++){
        if(st.charAt(i) == "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("Esta B es una BB"));
