let RedP = "R";
let YellowP = "Y";
let firstPlayer= RedP;

let gameOver = false;
let board;// there are 7 columns and 6 rows 

let rows = 6;
let columns = 7;
let trackColumns = []; //this will allow the game to keep track of which row each column is at.


//onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).//https://www.w3schools.com/jsref/event_onload.asp
window.onload = function() { 
    setGame();
}

function setGame() { //this function will populate the tile within the board
    board = [];//the board will correspond to the tiles in the html page
    trackColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let x = 0; x < rows; x++) {
        let row = [];
        for (let z = 0; z < columns; z++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = x.toString() + "-" + z.toString();//create an ID that correspond to the array in JS 
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let x = parseInt(coords[0]);
    let z = parseInt(coords[1]);

    // figure out which row the current column should be on
    x = trackColumns[z]; 

    if (x < 0) { // board[x][z] != ' '
        return;
    }

    board[x][z] = firstPlayer; //update JS board
    let tile = document.getElementById(x.toString() + "-" + z.toString());
    if (firstPlayer == RedP) {
        tile.classList.add("redChip");
        firstPlayer = YellowP;
    }
    else {
        tile.classList.add("yellowChip");
        firstPlayer = RedP;
    }

    x -= 1; //update the row height for that column
    trackColumns[z] = x; //update the array

    checkWinner();
}

function checkWinner() {
     // horizontal
     for (let x = 0; x < rows; x++) {
         for (let z = 0; z < columns - 3; z++){
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x][x+1] && board[x][z+1] == board[x][z+2] && board[x][z+2] == board[x][z+3]) {
                    setWinner(x, z);
                    return;
                }
            }
         }
    }

    // vertical
    for (let z = 0; z < columns; z++) {
        for (let x = 0; x < rows - 3; x++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x+1][z] && board[x+1][z] == board[x+2][z] && board[x+2][z] == board[x+3][z]) {
                    setWinner(x, z);
                    return;
                }
            }
        }
    }

    // anti diagonal
    for (let x = 0; x < rows - 3; x++) {
        for (let z = 0; z < columns - 3; z++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x+1][z+1] && board[x+1][z+1] == board[x+2][z+2] && board[x+2][z+2] == board[x+3][z+3]) {
                    setWinner(x, z);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let x = 3; x < rows; x++) {
        for (let z = 0; z < columns - 3; z++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x-1][z+1] && board[x-1][z+1] == board[x-2][z+2] && board[x-2][z+2] == board[x-3][z+3]) {
                    setWinner(x, z);
                    return;
                }
            }
        }
    }
}

function setWinner(x, z) {
    let winner = document.getElementById("winner");
    if (board[x][z] == RedP) {
        winner.innerText = "Way to Go Red!!!";             
    } else {
        winner.innerText = "Way to Go Yellow!!";
    }
    gameOver = true;
}