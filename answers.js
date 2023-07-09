//* Part I: HTML & CSS
//2 - I am shakey, I could use a refresher

//*Part II: JavaScript Reps
///////////////////////////////////////////////////////////////////////
//Easy Going
///////////////////////////////////////////////////////////////////////
//Write a for loop that will log the numbers 1 through 20.
for(let counter = 1; counter <=20; counter++) {
    console.log(counter);
}
///////////////////////////////////////////////////////////////////////
//Get Even
///////////////////////////////////////////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
} 

//////////////////////////////////////////////////////////////////////
//Fizz Buzz
//////////////////////////////////////////////////////////////////////
/*Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.*/

let a = 1; 

for (let a = 1; a <= 100; a++) {
    if (a % 3 && a % 5){
        console.log("FizzBuzz");
    } else if (a % 3) {
        console.log("Fizz");
    }
    else if( a % 5) {
      console.log("Buzz");  
    }
}

///////////////////////////////////////////////////////////////////////
//Wild Wild Life
///////////////////////////////////////////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2, 1, "5001"); 
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart.push("Downside Up");
console.log(dart);

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
console.log(wolfy); 

wolfy.unshift("Gameboy");
console.log(wolfy);

///////////////////////////////////////////////////////////////////////
//Yell at the Ninja Turtles
///////////////////////////////////////////////////////////////////////
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
console.log(ninjaTurtles);

//Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.
const ninjaTurtles1 = []
for (let item of ninjaTurtles){
    ninjaTurtles1.push(item.toUpperCase()); 
}
console.log(ninjaTurtles1);

