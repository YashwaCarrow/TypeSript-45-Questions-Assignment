//ntentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const noError : number[] = [4,12,18,24];

//Making error by giving 10 index number which is invalid. 
console.log(noError[10]); 

//Correcting the error by giving correct index number.
console.log(noError[0]);