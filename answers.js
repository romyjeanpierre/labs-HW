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

///////////////////////////////////////////////////////////////////////
//Methods, Revisited
///////////////////////////////////////////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
console.log(favMovies[8]);

//use the .sort method 
favMovies.sort(); 
console.log(favMovies);

//Use the method pop.
favMovies.pop()
console.log(favMovies);

//push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy")
console.log(favMovies); 

//Reverse the array.
const reversedFavMovies = favMovies.reverse();
console.log(reversedFavMovies);

//Use the shift method.
favMovies.shift(); 
console.log(favMovies); 


//unshift - what does it return?
favMovies.unshift('Bad Boys'); 
console.log(favMovies);

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
favMovies.splice(15, 1, "Avatar"); 
console.log(favMovies);


//slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
//Store the value of your slice in a variable and console.log it.
//console.log your final results.
const middleIndex = Math.ceil(favMovies.length / 2); 
console.log(middleIndex);
const lastHalf = favMovies.slice(-middleIndex);
console.log(lastHalf);

//store the value of your slice in a variable, console.log
let lastHalf1 = ['Imitation of Life', "Howl's Moving Castle", 'Harry Potter', 'Harry Potter', 'Fried Green Tomatoes', 'Fast and Furious', 'Avatar', 'Conan the Barbarian', 'Cloud Atlas', 'Black Panther'];

console.log (lastHalf1);
//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(lastHalf1[5]);

///////////////////////////////////////////////////////////////////////
//Where is Waldo
///////////////////////////////////////////////////////////////////////
const whereIsWaldo = [
    ["Timmy", "Frank"],
 "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", 
                    ["Baked Goods", "Waldo"]
                ]
            ];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo)

//Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"; 
console.log(whereIsWaldo); 

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

///////////////////////////////////////////////////////////////////////
//Excited Kitten
///////////////////////////////////////////////////////////////////////


for (let  i = 0; i<= 20; i++)
    if ( i % 2 === 0){
        console.log("...human...why you taking pictures of me?..."|| "...the catnip made me do it..."|| "...why does the red dot always get away...")
    }
    else {
        console.log(i + "Love me, pet me! HSSSSSS!");
    }

/////////////////////////////////////////////////////////////////////
//Find the Median
/////////////////////////////////////////////////////////////////////

/*const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];*/

const median = arr => {
    const mid = Math.floor(arr.length/2), 
    nums = [...arr].sort((a, b) => a - b); 
    return arr.length % 2 !==0 ? nums[mid] : (nums[mid-1] + nums[mid]) / 2;
};
console.log(median([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12])); 

///////////////////////////////////////////////////////////////////////
//Hungry for More?
///////////////////////////////////////////////////////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];













