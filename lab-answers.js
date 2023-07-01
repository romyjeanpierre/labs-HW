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
    