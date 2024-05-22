"use strict";
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
const usernames = ["admin", "yashaya", "tia", "ophelia", "adrien"];
usernames.forEach(username => {
    //• If the username is 'admin',printing a special greeting, such as Hello admin,would you like to see a status report?
    if (username === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    //• Otherwise,printing a generic greeting,such as Hello whichever username entered,thank you for logging in again.
    else {
        console.log("Hello " + username + " thanks for logging in again.");
    }
});
