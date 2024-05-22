"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
//• Starting with my program from Exercise 14.Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList = ["Jeremiah", "Fiza", "Abraham", "Hadiya"];
for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:00pm sharp at My place.Inform me if you won't be able to make it.");
}
;
let guestThatWontBeComing = "Fiza";
console.log(" \t Unfortunately I won't be able to make it.Regards " + guestThatWontBeComing + ". \t");
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Tia";
guestList[2] = newGuest;
for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:00pm sharp at My place.Inform me if you won't be able to make it.");
}
;
