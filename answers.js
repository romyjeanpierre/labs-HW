//* Part I: HTML & CSS
//2 - I am shakey, I could use a refresher

//*Part II: JavaScript Reps
////////////////////////////////////////////////////////////////////
//Easy Going
///////////////////////////////////////////////////////////////////
//Write a for loop that will log the numbers 1 through 20.
for(let counter = 1; counter <=20; counter++) {
    console.log(counter);
}
/////////////////////////////////////////////////////////////////////
//Get Even
/////////////////////////////////////////////////////////////////////
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