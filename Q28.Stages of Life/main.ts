//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let myage : number = 17; 

//• If the person is less than 2 years old,then printing a message that the person is a baby.

if ( myage < 2 ) {
    console.log("You're a baby.");
}

//• If the person is at least 2 years old but less than 4,then printing a message that the person is a toddler.

else if ( myage >= 2 && myage < 4) {
     console.log("You're a toddler.");
} 

//• If the person is at least 4 years old but less than 13,then printing a message that the person is a kid.

else if ( myage >= 4 && myage < 13) {
    console.log("You're a kid.");
} 

//• If the person is at least 13 years old but less than 20,then printing a message that the person is a teenager.

else if ( myage >= 13 && myage < 20) {
    console.log("You're a teenager.");
} 

//• If the person is at least 20 years old but less than 65,then printing a message that the person is an adult.

else if ( myage >= 20 && myage < 65) {
    console.log("You're an adult.");
}

//• If the person is age 65 or older,then printing a message that the person is an elder.

else if ( myage >= 65){   
    console.log("You're an elder.");
}