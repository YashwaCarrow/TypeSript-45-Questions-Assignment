"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//•  Using Loop through the array.
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinalEnding;
    //• Using an if-else chain inside the loop to print the proper ordinal ending for each number.
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(number + ordinalEnding);
}
