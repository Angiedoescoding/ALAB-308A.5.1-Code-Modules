// The Game logic here

import { checkAnswer, image } from "./answerpicture.js"; 

const questions = [
    "You can find this animal in Asia and Africa.",
    "These animals communicate with each others using scent, voice calls, and infrasound.",
    "When they are babies, their body is covered with hair and it reduces over time as they grow.",
    "They help maintain forest and savanna ecosystems for other species and are integrally tied to rich biodiversity."
];

const answer = 'elephant';
let attempts = 4;

export function askQuestion(){
    let correctGuess = false;                                 

    for (let i = 0; i < questions.length; i++) {                
        alert(questions[i]);                                  

    const guess = prompt("Enter your answer here").toLowerCase();
    const correct = checkAnswer(guess);

    if (correct) {
        correctGuess = true;
        alert("That's correct! It's an elephant!");
        image();
        break;
    } else {
        if (i < questions.length - 1) {                 
            alert("That's not correct! Try another hint.");
        } else {                                      
            alert("It looks like no more attempts left. Try again later.");
            }
        }
    }
}

export function getAttempts() {
    attempts
}