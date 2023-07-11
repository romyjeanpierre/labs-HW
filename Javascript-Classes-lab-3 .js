


class Hamster {
    constructor (owner = '', name, price = 15){
     this.owner = owner; 
     this.name = name; 
     this.price = price;  
    }
wheelRun() {
    console.log( 'squeak squeak')
}
 eatFood() {
    console.log('nibble nibble')
 }
 getPrice() {
    return this.price
 }
}
const hamster = new Hamster('Stevie','Riri')
hamster.wheelRun()
hamster.eatFood()
console.log(hamster.getPrice())
console.table(hamster)

//* Person ---------
class Person{
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamster = [], bankAccount = 0) {
        this.name = name; 
        this.age = age; 
        this.height = height; 
        this.weight = weight; 
        this.mood = mood; 
        this.hamster = hamster; 
        this.bankAccount = bankAccount; 
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`I like ${this.name} `)
    }
    eat(inc){
        this.weight = this.weight + inc 
    }
    exercise(inc){
        this.weight = this.weight - inc
    }
    ageUp(inc){
        this.age = this.age + inc 
        this.bankAccount = this.bankAccount + 10
    }
    buyHamster(ham){
    this.hamster.push(ham)
    this.mood +=10
    this.bankAccount = this.bankAccount-hamster.price
    }
}
const romy = new Person('Romy')
romy.getName()
romy.getAge()
romy.greet()
romy.eat()
romy.exercise()
romy.ageUp()
romy.getWeight()
romy.buyHamster(hamster)

console.log(romy.getWeight());
console.log(romy.eat)
console.log(romy.buyHamster);
console.table(romy);

const timmy = new Person('Timmy', 5)
console.table(timmy)
timmy.eat(5)
timmy.exercise(5)
timmy.ageUp(9)
timmy.ageUp(15)
timmy.eat(2)
timmy.exercise(2)
timmy.buyHamster('Gus')
console.table(timmy)