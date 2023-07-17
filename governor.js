class Governor{
    static properties (command, appoint, govern){
        this.command = command;
        this.appoint = appoint;
        this.govern = govern;
        console.log(this.command)
    }
    static propose(legislation){
        console.log(`I propose and pass new ${legislation} for my state!`)
    }
}
Governor.properties('National Guard','State Judges','State of New York');
Governor.propose('access to reproductive healthcare');


/*
Think of three properties all people share, set them with the constructor
Think of three methods all people share
*/
class Person{
    constructor(brain, language, culture){
        this.brain = brain;
        this.language = language;
        this.culture = culture;
    }
    control(){
        console.log(`The ${this.brain} controls our thoughts, movement, speech and all functions of the body.`);
    }
    communicate(){
        console.log(`A useful tool for communication is ${this.language}`)
    }
    evolution(){
        console.log(`${this.culture} drives human evolution more than genetics}`)
    }
}

/*Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
*/
class PostalWorker extends Person{
    collectLetters(){
        console.log(`they just keep on coming.`)
    }
    deliverMail(){
        console.log(`Our Motto is: "neither snow nor rain...from the swift completion their appointed rounds."`)
    }
    loadAndUnload(){
        console.log(`a small part of my daily workout`)
    }
}
class Chef extends Person{
    useTools(){
        console.log(`"A chef\'s sense of humor is as sharp as their knives."`)
    }
    cooking(){
        console.log(`"Oops, I accidentally added sugar instead of salt.`)
    }
    WearsApron(){
        console.log(`a messy kitchen and dirty apron is a sign of happiness`)
    }
}
const nicePostalMan = new PostalWorker('frontal, left & right hemisphere', 'mail', 'rain or shine' );
const captainCook = new Chef('left hemisphere', 'culinary linguistics', 'social responsibility' );
console.log(nicePostalMan);
console.log(captainCook); 


//////////////////////////////////////////////////////////////////
nicePostalMan.control();
nicePostalMan.communicate();
nicePostalMan.evolution();
nicePostalMan.collectLetters();
nicePostalMan.deliverMail();
nicePostalMan.loadAndUnload();
////////////////////////////////////////////////////////////////////
//
captainCook.control();
captainCook.communicate();
captainCook.evolution();
captainCook.useTools();
captainCook.cooking();
captainCook.WearsApron();