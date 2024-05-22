//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//• Making a list of five or more usernames called current_users.

const current_users : string[] = ["Admin","Yashaya","Tia","Ophelia","Adrien"];

//• Making another list of five usernames called new_users.Making sure one or two of the new usernames are also in the current_users list.

const new_users : string[] = ["Emma","Yashaya","Zoya","Tia","Hoorayn"];

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (let new_user of new_users) {
  const lowercase_new_user = new_user.toLowerCase();
  
  if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
      console.log("The username " + new_user + " is not available,Please enter a valid username.");
  }
   else {
      console.log("The username " + new_user + " is available.");
  }
};