/*// Declare and assign the variables below
let nameOfShuttle = 'Determination';
let speedOfShuttle = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfShuttle);
console.log(typeof speedOfShuttle);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = distanceToMars*milesPerKm ;
let hoursToMars=milesToMars/speedOfShuttle;
let daysToMars = hoursToMars/24;
// Print the results of the space mission calculations below
console.log(nameOfShuttle,"will take",daysToMars,"days to reach Mars");
// Calculate a trip to the moon below
let milesToMoon= distanceToMoon*milesPerKm;
let hoursToMoon= milesToMoon/speedOfShuttle;
let daysToMoon= hoursToMoon/24;
// Print the results of the trip to the moon below
console.log(nameOfShuttle,"will take",daysToMoon,"days to reach Moon")
*/
let score=0;
const input = require('readline-sync');

let name = input.question("Enter your name: ");

let question1 =input.question("What is the capital of France?");
let answerToQuestion1="france";
if(question1.toLowerCase==answerToQuestion1.toLowerCase){
    score = score+1;
    console.log("Congratulations",name,"Correct Answer!")
}
let question2 =input.question("Which planet is known as the Red Planet?");
let answerToQuestion2="Mars";

if(question2.toLowerCase==answerToQuestion2.toLowerCase){
    score = score+1;
}

let question3 =input.question("What is the largest mammal on Earth?");
let answerToQuestion3="Blue Whale";

if(question3.toLowerCase==answerToQuestion3.toLowerCase){
    score = score+1;
}

let question4 =input.question("What is the largest planet in our solar system?");
let answerToQuestion4="Jupiter";

if(question4.toLowerCase==answerToQuestion4.toLowerCase){
    score = score+1;
}

let question5 =input.question("What is the currency of Germany?");
let answerToQuestion5="Euro";

if(question5.toLowerCase==answerToQuestion5.toLowerCase){
    score = score+1;
}