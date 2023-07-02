//* Easy Going 
//Write a for loop that will log the numbers 1 through 20

for(let counter = 1; counter <=20; counter++) {
    console.log(counter);
} 

//* Get Even
//Write a for loop that will log only the even numbers in 0 through 200.

for(let x = 0; x <= 200; x += 2) {
    console.log(x);
}

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
    }
   
    //* Wild Wild Life

    const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    const sharky = ["Sharky", "shark", 20, "Left Coast"]
    const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
    plantee.push(40 )
        {console.log(plantee);
    }

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
    console.log(wolfy);

//* Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
//Use a for of loop to call toUpperCase() on each of them and print out the result.
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]; 
console.log(ninjaTurtles);
const newNinjaTurtles = [];
for (let names of ninjaTurtles){
    newNinjaTurtles.push(names.toUpperCase()); 
}
console.log(newNinjaTurtles);

//* Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log the index of Titanic
console.log('Titanic');

//Use the .sort method.
//Thought Question: What did this do to the array? Did it permanently alter it? sort it in alphabetical order 
favMovies.sort(); 
console.table(favMovies);

//Use the method pop.
favMovies.pop()
console.table(favMovies);

//push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy")
console.table(favMovies); 

//Reverse the array.
const reversedFavMovies = favMovies.reverse();
console.table(reversedFavMovies);

//Use the shift method.
favMovies.shift(); 
console.table(favMovies); 


//unshift - what does it return?
favMovies.unshift('Love Jones'); 
console.table(favMovies);


//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
//Thought Question: Did this permanently alter our array? 
favMovies.splice(15, 1, "Avatar"); 
console.table(favMovies);


//slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
//Store the value of your slice in a variable and console.log it.
//Thought Question: What is going on here?

//console.log your final results.
const middleIndex = Math.ceil(favMovies.length / 2); 
console.log(middleIndex);
const lastHalf = favMovies.slice(-middleIndex);
console.table(lastHalf);
