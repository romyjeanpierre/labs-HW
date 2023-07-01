//* Easy Going 
//Write a for loop that will log the numbers 1 through 20

for(let counter = 1; counter <=20; counter++) {
    console.log(counter);
} // The commit message should read: "Easy Going answered"

//* Get Even
//Write a for loop that will log only the even numbers in 0 through 200.

for(let x = 0; x <= 200; x += 2) {
    console.log(x);
} //The commit message should read: "Get Even answered"

//* Fizz Buzz
//Write a Javascript Application that logs all numbers from 1 - 100.
//If a number is divisible by 3, log "Fizz" instead of the number.
//If a number is divisible by 5, log "Buzz" instead of the number.
//If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.

let i 
for(i = 1; i<=100; i++){{
    console.log(i)}
    if(i % 3 == 0 && i % 5 == 0) { 
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0) {
       console.log('Fizz');
    } 
    else if(i % 5 == 0){
        console.log('Buzz');
    }
    }//The commit message should read: "Fizz Buzz answered"

//* Wild Wild Life

    const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    const sharky = ["Sharky", "shark", 20, "Left Coast"]
    const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.


//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City". 
    wolfy[3] = 'Gotham City';
        {console.log(wolfy)
    };

//3. Give D'Art a second hometown by adding "Hawkins"
    dart.push("Hawkins")
    {console.log(dart);
    }

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
//Remove "Wolfy" from the wolfy array 
    wolfy.shift();
    console.log(wolfy);
    // replace it with "Gameboy".
    wolfy.unshift("Gameboy");
    console.log(wolfy); //The commit message should read: "Wild Wild Life answered"

//* Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
//Use a for of loop to call toUpperCase() on each of them and print out the result.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]; 
console.log(ninjaTurtles);