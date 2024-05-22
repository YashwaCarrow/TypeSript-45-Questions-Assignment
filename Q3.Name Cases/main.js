"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let myname = "YaSHwA";
// For printing in lowercase.
console.log((myname.toLowerCase()));
// For printing in uppercase.
console.log((myname.toUpperCase()));
// For printing in titlecase.
console.log(myname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
