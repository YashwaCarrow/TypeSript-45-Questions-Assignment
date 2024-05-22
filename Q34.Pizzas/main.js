"use strict";
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
let fav_pizza = ["Chicken Tikka", "Tex-Mex", "Super Cheese"];
//• Modifying your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
for (let i = 0; i < fav_pizza.length; i++) {
    console.log("I like " + fav_pizza[i] + " pizza.");
}
;
//• Adding a line at the end of my program,outside the for loop that states how much you like pizza.
console.log("Pizza because everything less is a compromise.");
