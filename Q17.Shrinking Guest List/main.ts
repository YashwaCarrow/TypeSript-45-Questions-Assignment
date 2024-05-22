//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Starting with my program from Exercise 16.Adding a new line that prints a message saying that I can invite only two people for dinner.

let guestList: string[] = ["Yashaya","Tia","Jeremiah","Adria","Abraham","Hadiya","John"];

for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",Hope you're doing well,I would like to invite you to dinner on Saturday 8:30pm sharp at My place.");
};

for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",I just found out that our new dinner table won't arrive in time for the dinner and I've only got space for two guests.");
};

//Removing guests from my guest list one at a time until only two names remain in your list.Each time you pop a name from your list,print a message to that person letting them know I'm sorry I can’t invite them to dinner.

while(guestList.length >= 3){
    let removeGuest1 = guestList.pop()
console.log(`Sorry ${removeGuest1}, you are'nt invited to dinner anymore.`);
};

//• Printing a message to each of the two people still on your list, letting them know they’re still invited.

for (let index = 0; index < guestList.length; index++) {
    console.log("Hi " + guestList[index] + ",you're still invited so be at my place by 9:00pm sharp.");
};

//Removing the last two names from my guest list,so I have an empty list.Printing my list to make sure I actually have an empty list at the end of my program.

guestList.splice(0, 2);
console.log(guestList);