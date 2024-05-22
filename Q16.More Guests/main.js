"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Starting with my program from Exercise 15.Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList = ["Jeremiah", "Tia", "Abraham", "Hadiya"];
for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:00pm sharp at My place.");
    console.log(guestList[index] + ",I've found a huge dinner table.");
}
;
//• Adding one new guest to the beginning of my array.
let newguestName1 = guestList.unshift("Yashaya");
//Adding one new guest to the middle of my array. 
let newguestName2 = guestList.splice(3, 0, "Adria");
//• Using append() to add one new guest to the end of my guest list. 
let guestName3 = guestList.push("John");
//• Printing a new set of invitation messages,one for each person in my guest list.
for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:30pm sharp at My place.");
}
;
