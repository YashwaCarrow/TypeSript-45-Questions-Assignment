"use strict";
//ntentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
const noError = [4, 12, 18, 24];
//with error,10 index number is invalid. 
console.log(noError[10]);
//Correcting the error by giving correct index number
console.log(noError[0]);
