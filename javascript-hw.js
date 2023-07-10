class Cat {
    constructor(breed, gender, weight) {
        this.breed = breed;
        this.gender = gender;
        this.weight = weight;
        this.shed = 'false';
    
    }

    shedding() {
        this.shed = 'true';
        console.log(this.shed);
    }
    toString() {
        console.log(`The ${this.breed} cat weighs ${this.weight} lbs`)
    }
    }

    const siamese = new Cat('Siamese', 'Male', 8);
    const siberian = new Cat('Siberian', 'Female', 15)
    const ragdoll = new Cat('Ragdoll', 'Female', 11 )
    console.log(siamese);
    console.log(siberian);
    console.log(ragdoll);


    ragdoll.shedding();
    siamese.shedding();
    siberian.shedding ();
    ragdoll.toString();
    siamese.toString(); 
    siberian.toString(); 


   class Pirate {

    constructor(name, age, ship){
      this.name = name; 
      this.age = age; 
      this.ship = ship; 
      }

      pirateDetails() {
        return `PIRATE INFO: Name: ${this.name} Age: ${this.age}`;
        }
    }
       const jack = new Pirate('Jack', 38, 'blackpearl'); 
       const hook = new Pirate('Hook', 28, 'Indies'); 
       const pugwash = new Pirate('Pugwash', 25, 'Snakes'); 


       //const blackPearl = [jack, john, jane]; 

       const Caribbean = []
       Caribbean.push(jack, hook, pugwash); 
       console.log(Caribbean);        

    for (const pirate of Caribbean) {
        console.log(pirate.name); 
        console.log(pirate.age); 
        console.log(pirate.ship); 
    }