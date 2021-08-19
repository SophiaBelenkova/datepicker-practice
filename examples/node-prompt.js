const prompt = require('prompt-sync')({sigint: true});

const numberToGuess = Math.round(Math.random() * 10) + 1;

let foundCorrectNumber = false;

while(!foundCorrectNumber){
    let guess = prompt("Enter your number: ");
    guess = Number(guess); //don't forget that prompt retrieves your input as a string
    if(guess === numberToGuess){
        console.log("You got it!");
        foundCorrectNumber = true;
    }else{
        console.log("Try again");
    }
}