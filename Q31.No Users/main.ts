//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usernames: string[] = [];

//• If the list is empty, print the message We need to find some users!
if (usernames.length === 0) {
  console.log("We need to find some users!");
} 
//• Removing all of the usernames from my array and making sure the correct message is printed.
else {
  console.log( usernames+" have been removed.");
  console.log( usernames.length + " users have been removed.");
}
