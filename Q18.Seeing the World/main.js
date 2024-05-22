"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Storing my favourite locations in a array.Making sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
let placesToVisit = ["Christ the Redeemer", "Statue of Liberty", "Sagrada Familia", "Big Ben"];
//• Printing my array in its original order.
console.log("I would love to visit " + placesToVisit + ".");
//• Print my array in alphabetical order without modifying the actual list.
console.log("I would love to visit " + [...placesToVisit].sort() + ".");
//• Showing that my array is still in its original order by printing it.
console.log("I would love to visit " + placesToVisit + ".");
//• Printing my array in reverse alphabetical order without changing the order of the original list.
console.log("I would love to visit " + placesToVisit.reverse() + ".");
//• Showing that my array is still in its original order by printing it again.
console.log("I would love to visit " + placesToVisit + ".");
//• Reversing the order of my list.Printing the array to show that its order has changed.
console.log("I would love to visit " + placesToVisit.reverse() + ".");
//• Reverse the order of your list again.Print the list to show it’s back to its original order.
console.log("I would love to visit " + placesToVisit.reverse() + ".");
//• Sorting my array so it’s stored in alphabetical order.Printing the array to show that its order has been changed.
console.log("I would love to visit " + [...placesToVisit].sort() + ".");
//• Sorting to change my array so it’s stored in reverse alphabetical order.Printing the list to show that its order has changed.
console.log("I would love to visit " + placesToVisit.reverse() + ".");
