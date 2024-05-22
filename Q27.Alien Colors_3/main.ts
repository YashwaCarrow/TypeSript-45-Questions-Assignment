//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

let alien_color: string = "Green";

//• If the alien is green,printing a message that the player earned 5 points.
if( alien_color === "Green" ){
    console.log("You've just earned 5 points.");
}
else if( alien_color === "Yellow" ){
    console.log("You've just earned 10 points.")
}
else if( alien_color === "Red" ){
    console.log("You've just earned 15 points.");
}

let alien_color2: string = "yellow";

//• If the alien is yellow, print a message that the player earned 10 points.
if( alien_color2 === "yellow" ){
    console.log("You've just earned 10 points.");
}
else if( alien_color2 === "green" ){
    console.log("You've just earned 5 points.");
}
else if( alien_color2 === "Red" ){
    console.log("You've just earned 15 points.");
}

let alien_color3 : string = "red";

//• If the alien is yellow, print a message that the player earned 10 points.
if( alien_color3 === "red"){
    console.log("You've just earned 15 points.");
}
else if( alien_color3 === "green"){
    console.log("You've just earned 5 points.");
}
else if( alien_color3 === "yellow"){
    console.log("You've just earned 10 points.");
}