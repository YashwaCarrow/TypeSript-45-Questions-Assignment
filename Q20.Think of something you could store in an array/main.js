"use strict";
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let programmingLanguages = ["TypeScript", "JavaScript", "Python", "HTML"];
console.log("Here's a list of the most used Programming Languages.");
for (let item of programmingLanguages) {
    console.log(programmingLanguages.indexOf(item) + 1 + ":" + item + ".");
}
;