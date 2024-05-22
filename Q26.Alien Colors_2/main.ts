//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color : string = "green";

//• If the alien’s color is green,printing a statement that the player just earned 5 points for shooting the alien.

if ( alien_color === "green" ) {
    console.log("You've just earned 5 points for shooting the alien.");
}
//• If the alien’s color isn’t green,print a statement that the player just earned 10 points.
else {
    console.log("You've just earned 10 points.");
}

//• Writing one version of this program that runs the if block and another that runs the else block.

if ( alien_color === "green" ) {
    console.log("You've just earned 5 points for shooting the alien.");
}
else {
    console.log("You've just earned 10 points.");
}
