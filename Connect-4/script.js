let RedP = "Red";
let YellowP = "Yellow";
let firstPlayer= RedP;

let gameOver = false;
let board;// there are 7 columns and 6 rows 

let rows = 6; //vertical will be x
let columns = 7;// horizontal will be z 
let trackColumns = []; 


//onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).//https://www.w3schools.com/jsref/event_onload.asp
window.onload = function() { 
    setGame();
}

function setGame() { //this function will populate the tile within the board
    board = [];//the board will correspond to the tiles in the html page
    trackColumns = [5, 5, 5, 5, 5, 5, 5]; // for each column has 5 tiles -1 

    for (let x = 0; x < rows; x++) {
        let row = [];
        for (let z = 0; z < columns; z++) {
            row.push(' ');
            // In HTML
            let tile = document.createElement("div");
            tile.id = x.toString() + "-" + z.toString();//create an ID that correspond to the array in JS 
            tile.classList.add("tile");//add a class for the tile 
            tile.addEventListener("click", Piece);
            document.getElementById("board").append(tile);/*append this tag in the board in HTML. this is similar to adding <div id = "" class = "title"></div> 42 times in HTML. however by appending it, js eliminate that process */
        }
        board.push(row);//this adds the above function to the JS board 
    }
}

//define the function here 
//If game is over we return do nothing 

function Piece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let area = this.id.split("-");/*The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.*/
    let x = parseInt(area[0]);
    let z = parseInt(area[1]);//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

    // figure out which row the current column should be on
    x = trackColumns[z]; 

    if (x < 0) { 
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

    whoIsTheWinner();
}

function whoIsTheWinner() {
     // Rows/Horizontal - run from left to right  or right to left 
     for (let x = 0; x < rows; x ++) {
         for (let z = 0; z < columns - 3; z ++){
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x][x + 1] && board[x][z+1] == board[x][z+2] && board[x][z+2] == board[x][z+3]) {
                    theWinner(x, z);
                    return;
                }
            }
         }
    }

    // Columns/vertical - goes up and down
    for (let z = 0; z < columns; z++) {
        for (let x = 0; x < rows - 3; x++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x+1][z] && board[x+1][z] == board[x+2][z] && board[x+2][z] == board[x+3][z]) {
                    theWinner(x, z);
                    return;
                }
            }
        }
    }

    // Inverse diagonal - all the entries are zero except those on the diagonal going from the lower left corner to the upper right corner (↗),
    for (let x = 0; x < rows - 3; x++) {
        for (let z = 0; z < columns - 3; z++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x+1][z+1] && board[x+1][z+1] == board[x+2][z+2] && board[x+2][z+2] == board[x+3][z+3]) {
                    theWinner(x, z);
                    return;
                }
            }
        }
    }

    // diagonal - from one corner odf the board to the other 
    for (let x = 3; x < rows; x++) {
        for (let z = 0; z < columns - 3; z++) {
            if (board[x][z] != ' ') {
                if (board[x][z] == board[x-1][z+1] && board[x-1][z+1] == board[x-2][z+2] && board[x-2][z+2] == board[x-3][z+3]) {
                    theWinner(x, z);
                    return;
                }
            }
        }
    }
}

function theWinner(x, z) {
    let winner = document.getElementById("winner");
    if (board[x][z] == RedP) {
        winner.innerText = "Way to Go Red!!!";             
    } else {
        winner.innerText = "Way to Go Yellow!!";
    }
    gameOver = true;
}