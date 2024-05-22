//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings.

console.log( "iphone" === "iphone" ); //true
console.log( "iphone" !== "iphone" ); //false

console.log(("civic" as string) !== "grande" ); //true
console.log( "civic" !== "civic" ); //false

//• Tests using the lower case function.

console.log( "YASHWA".toLowerCase() === "yashwa" ); //true
console.log( ("YASH" as string) === "yash" ); //false

//• Numerical tests involving equality and inequality,greater than and less than, greater than or equal to and less than or equal to.

//Numerical tests involving equality.
console.log( 4 === 4 ); //true
console.log( 4 !== 4 ); //false

//Numerical tests involving inequality.
console.log((8 as number) !== 9 ); //true
console.log((8 as number) === 10 ); //false

//Greater than test. 
console.log( 11 > 6 ); //true
console.log( 6 > 11 ); //false

//Less than test.
console.log( 6 < 10 );//true
console.log( 10 <6 );//false

//Greater than or Equal to test.
console.log( 12 >= 12 );//true
console.log( 8 >= 12 );//false

//Less than or Equal to.
console.log( 4 <= 8 );// true
console.log( 16 <= 12 );//false

//• Tests using "and" and "or" operators.
console.log( true && true );//true
console.log( true && false );//false

console.log( true || false );//true
console.log( false || false );//false

//• Test whether an item is in a array.
const fruits :string[] = ["Audi","BMW","Mercedes"];
console.log("'Audi' is in the array:", fruits.includes("Audi")); //true
console.log("'Honda' is in the array:", fruits.includes("Honda")); //false

//• Test whether an item is not in a array.
console.log("'Porsche' is not in array:", !fruits.includes("Porsche")); //true
console.log("'Porsche' is not in array:", !fruits.includes("Mercedes")); //false