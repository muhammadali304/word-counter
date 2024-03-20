#!  /usr/bin/env  node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to Count the Words"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`You have written ${words.length} words. `);
