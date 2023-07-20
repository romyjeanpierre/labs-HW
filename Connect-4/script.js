clm1 = 1; 
clm2 = 1;
clm3 = 1; 
clm4 = 1;
clm5 = 1; 
clm6 = 1;
clm7 = 1; 
turn = 1 ;



function check(player) {
    setTimeout (() => {
        for (x = 1; i <= 7; x++) {
            for (y = 1; y <= 3; y++) {
                if (document.getElementById(`c${x}r${y}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()  
                }

                
            }
        }



        for (x = 1; x <= 6; x++) {
            for (y = 1; y <= 4; y++) {
                if (document.getElementById(`c${x}r${y}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()  
                }

                
            }
        }

        for (x = 1; x <= 4; x++) {
            for (y = 1; y <= 3; y++) {
                if (document.getElementById(`c${x}r${y}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${x}r${y + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()  
                }

                
            }
        }

        for (x = 1; x <= 4; x++) {
            for (y = 6; y >= 4; y--) {
                if (document.getElementById(`c${x}r${y}`).style.backgroundColor == `${player}` && document.getElementById(`c${x + 1}r${y - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${x + 2}r${y - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${x + 3}r${j - 3}`).style.backgroundColor == `${player}`) {alert(`${player} wins`)
                    location.reload()  
                }

                
            }
        }
    }, 200)
}

document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        sum = eval(`clm${e.id}`)
        eval(`clm${e.id}++`)


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            check('red')
            document.getElementById("whosturn").innerText = "Yellow's Turn"
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow"
            turn++
            check('yellow')
            document.getElementById("whosturn").innerText = "Red's Turn"

        }

    })
})