//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Starting with my program from Exercise 14.Adding a print statement at the end of my program stating the name of the guest who can’t make it.

let guestList: string[] = ["Jeremiah","Fiza","Abraham","Hadiya"];

for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:00pm sharp at My place.Inform me if you won't be able to make it.");
};

let guestThatWontBeComing : string = "Fiza";

console.log(" \t Unfortunately I won't be able to make it.Regards " + guestThatWontBeComing + ". \t" );

//• Modified my guest list,replacing the name of the guest who can’t make it with the name of the new person I'm inviting.

let newGuest : string = "Tia";

guestList[2] = newGuest;

//• Printed a second set of invitation messages,one for each person who is still in my guest list.

for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:00pm sharp at My place.Inform me if you won't be able to make it.");
};