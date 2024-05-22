//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

//• Making an array of my three favorite fruits and calling it favorite_fruits.

let favorite_fruits : string[] = ["Apple","Mango","Grapes"];

//• Write five if statements.Each should check whether a certain kind of fruit is in your array.If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apple!");
}

if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}

if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}

if (favorite_fruits.includes("Pear")) {
    console.log("I guess I like Pear too!");
}

if (favorite_fruits.includes("Avocado")) {
    console.log("I guess I like Avocado too!");
}
