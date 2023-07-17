/*hull is the same as hitpoints. 
If hull reaches 0 or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target 

*/


class Ship {
    /*
     -Create a ship.
     - name - The name of the ship.
     - hull - The hull of the ship.
     - firepower - The firepower of the ship.
     - accuracy - The accuracy of the ship.
    */


    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    /*
     - Attack another ship.
     - target - The ship to attack.
     - use %c to convert method argument to css
     */
    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            console.log(`%c ${this.name} hit ${target.name} for ${this.firepower} damage.`, 'color: green'); //Alien/USS hit Alien/USS _ for _ damage
            console.log(`%c ${target.name}'s hull is now ${target.hull}`, 'color: orange'); // eg. Alien/ USS _'s hull is now _
        } else {
            console.log(`%c ${this.name} missed ${target.name}.`, 'color: red'); //USS/Alien missed Alien/USS
        }
    }
}

class Game {
    /*
     - Create a game.
     - player - The player's ship.
     - aliens - The alien ships.
     - battlesWon - The number of battles won by the player.
     */
    constructor(player, aliens, battlesWon = 0) {
        this.player = player;
        this.aliens = aliens;
        this.battlesWon = battlesWon;
    }

    startGame() {
        while (this.player.hull > 0) {
            for (let alien of this.aliens) {
                while (alien.hull > 0 && this.player.hull > 0) {
                    this.player.attack(alien);
                    if (alien.hull > 0) {
                        alien.attack(this.player);
                    } else {
                        console.log(`%c ${alien.name} has been destroyed!`, 'color: red');//Alien Ship + alien ship # + has been destroyed!
                    }
                }
                    //if hull reaches 0 or less, the ship is destroyed - game over
                if (this.player.hull <= 0) {
                    console.log(`%c The player's ship has been destroyed. Game over`, 'color: red');
                    break;
                }
            }
                //win the battle - then recharge shields
            if (this.player.hull > 0) {
                this.battlesWon++; // if _battle is won, hull is greater than 0
                console.log(`You won the battle! Battles won: ${this.battlesWon}`);

                let response = window.confirm('Do you want to recharge your shields? Click "OK" for yes or "Cancel" for no.') //confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
                if (response) { //if player confirms - their shields will be recharged 
                    this.player.hull = 20;
                    console.log('Your shields are recharged!')
                } else { //otherwise game over
                    console.log('You decided not to recharge your shields and disengaged. Game over')
                    return
                }

                // Level up player and enemies after each battle
                this.player.hull++
                this.player.firepower++
                this.aliens.forEach(alien => {
                    alien.hull++
                    alien.firepower++
                })

                // Generate new aliens
                this.aliens = this.generateAliens()

                    //!Bonus--------------------------------------------------
                // Distribute medals and power ups to the player depending on points //if player win 5 battles they receive the bronze medal, 10 battles receive the silver and 15 gold // 
                if (this.battlesWon === 5) {
                    console.log(`%c You received the Bronze Medal for winning 5 battles!`, 'color: green')
                } else if (this.battlesWon === 10) {
                    console.log(`%c You received the Silver Medal for winning 10 battles!`, 'color: green')
                    this.player.firepower += 2
                    console.log(`%c Your firepower has been increased by 2!`, 'color: green')
                } else if (this.battlesWon === 15) {
                    console.log(`%c You received the Gold Medal for winning 15 battles!`, 'color: green')
                    this.player.hull += 5
                    console.log(`%c Your hull has been increased by 5!`, 'color: green')
                }
            }
                     //!-----------------------------------------------------


            // Check if the player wants to play again click ok
            const play = window.confirm("Do you want to play the next battle? Click 'OK' for yes or 'Cancel' to quit.");
            // if player does not want to continue playing, click cancel button 
            if (!play) {
                window.alert('Thanks for playing!')
                return;
            }
        }
    }

    /*
     - Generate alien ships.
     - Make many alien ships with a Class. Make each object slightly different . . .
     Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

Try out the game with the first alien ship in the array.

Run the battle with all ships in turn.
     */
    generateAliens() {
        const alienShips = []
        for (let i = 1; i <= 6; i++) {
            const hull = Math.floor(Math.random() * 4) + 3
            const firepower = Math.floor(Math.random() * 3) + 2
            const accuracy = Math.floor(Math.random() * 3) + 6 / 10
            alienShips.push(new Ship(`Alien Ship ${i}`, hull, firepower, accuracy))
        }
        
        return alienShips
    }
}

// Generate player ship
const playerShip = new Ship("USS Assembly", 20, 5, 0.7);

// Generate alien ships
const alienShips = [];
for (let i = 1; i <= 6; i++) {
    const hull = Math.floor(Math.random() * 4) + 3;
    const firepower = Math.floor(Math.random() * 3) + 2;
    const accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    const alienShip = new Ship(`Alien Ship ${i}`, hull, firepower, accuracy);
    alienShips.push(alienShip);
}

// Start game
const game = new Game(playerShip, alienShips);

const attackBtn = document.getElementById('attack-btn')
attackBtn.addEventListener('click', () => {
    game.startGame()
})
