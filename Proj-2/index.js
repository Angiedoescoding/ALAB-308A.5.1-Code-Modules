// This file is now the MAIN file 

import { askQuestion } from './games.js';

window.onload = function() {
    askQuestion();
};














// =============================================


// Create your game here!
// window.onload = function() {

// const greeting = document.querySelector("body");
// greeting.innerHTML = "<h1>Let's play the game!</h1><h3>Guess the animal!</h3>"
// greeting.style.color = "purple";
// const app = document.getElementById("app");


// const questions = [
//     "You can find this animal in Asia and Africa.",
//     "These animals communicate with each others using scent, voice calls, and infrasound.",
//     "When they are babies, their body is covered with hair and it reduces over time as they grow.",
//     "They help maintain forest and savanna ecosystems for other species and are integrally tied to rich biodiversity."
// ];
//     window.console.log(questions)

// const answer = 'elephant';
// let attempts = 4;

// function askQuestion(){
//     let correctGuess = false                                    // To track that the guess is correct when user inputs it

//     for (let i = 0; i < questions.length; i++){                 // Loop through each question of the array
//         alert(questions[i]);                                    // Display current question

//     const guess = prompt("Enter your answer here").toLowerCase();
//     const correct = checkAnswer(guess);

//     if (correct) {
//         correctGuess = true;
//         alert("That's correct! It's an elephant!");
//         //document.body.style.backgroundColor = "limegreen";
//         image();
//         break;
//     } else {
//         if (i < questions.length - 1) {                 // If the answer is incorrect and not the last question - you have new attempt
//             alert("That's not correct! Try another hint.");
//         } else {                                        // The last question left and no right answer
//             alert("It looks like no more attempts left. Try again later.");
//             }
//         }
//     }

// }

// function checkAnswer(guess){
//     return guess === answer;
// }


// function image(){
//     const elephImg = document.createElement("img");
//     elephImg.src = "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     elephImg.width = "300px";
//     elephImg.height = "250px";
//     document.body.appendChild(elephImg);
// }

//     setTimeout(askQuestion, 500)

// }



// Steps for the game:
// Add an array of questions about the same answer; and an answer
// Loop through questions (let i=0; i <...; i++)
// Show the 1st window with a question and allow to enter the answer
// Checking user's answer if it matches the variable we declared
// Question - using alert()
// Answer - using prompt(); when correct answer - use alert() again to confirm
// Apply .tolowercase() to the user's response
// Give the user 4 attempts to answer.
