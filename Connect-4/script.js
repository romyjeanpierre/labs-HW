
let board = Array(6).fill().map(() => Array(7).fill(0)); /*I defined the board here using the array constructor to pass in the length of the array. filling it and mapping over each object within the array.Array.fill creates an array with six elements in it. the fill method initializes every element with a undefined value. the map function only works with arrays. if the fill function wasn't here it would be an empty array. the map function is used to replace each undefined element with a new array of side 7 and i'm filling all the array with a value of 0. so it prints the 6 by 7 array */
let currentPlayer = 1; //created a variable for the current player 
let gameActive = true;


//initial function for creating the board
function createBoard() {
    const boardDiv = document.getElementById('board'); //diving this element ID board 
    boardDiv.innerHTML = '';//passing an inner HTML just to initialize some kind of value in it
    for(let row = 0; row < 6; row++) { //then create a for loop to run the rest # of rows i find in this array to 6. so 6 times it will run
        for(let col = 0; col < 7; col++) {//nested for loop just to get to every cell for each row and column. so it will run 7 times so in total 42 cells
            const cellDiv = document.createElement('div'); //*creates a cell
            cellDiv.dataset.row = row; //here i'm accessing and setting  the values of each cell within the rows and columns from HTML and adding 
            cellDiv.dataset.col = col;
            cellDiv.classList.add('cell');
            if(board[row][col] === 1) cellDiv.classList.add('red'); //*applying conditional classes. if the cell has a value of 1 then add the red class to it 
            if(board[row][col] === 2) cellDiv.classList.add('yellow');
            cellDiv.addEventListener('click', cellClick);// i added eventlistener so when you click on a cell it runs the second function below
            boardDiv.appendChild(cellDiv);
        }
    }
}

function cellClick(e) {
    if(!gameActive) return;//if the game is inactive it automatically reboots it. so when the game end 
    const col = e.target.dataset.col;
    let row = 5;
    while(row >= 0) {
        if(board[row][col] === 0) break; 
        row--;
    }
    if(row === -1) return;
    board[row][col] = currentPlayer;
    createBoard();
    if(checkWin(currentPlayer)) {
        gameActive = false;
        document.getElementById('message').innerText = 'Player ' + currentPlayer + ' wins!';
        document.getElementById('restart').style.display = 'block';
        return;
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('message').innerText = 'Player ' + currentPlayer + '\'s turn';
}

function checkWin(player) {
for(let row = 0; row < 6; row++) {
    for(let col = 0; col < 7; col++) {
    if(checkDirection(row, col, 1, 0, player) || checkDirection(row, col, 0, 1, player) || checkDirection(row, col, 1, 1, player) || checkDirection(row, col, 1, -1, player)) return true;
    }
}
return false;
}

function checkDirection(row, col, dirRow, dirCol, player) {
for(let i = 0; i < 4; i++) {
    if(row < 0 || row > 5 || col < 0 || col > 6 || board[row][col] !== player) return false;
    row += dirRow;
    col += dirCol;
}
return true;
}

function restartGame() {
board = Array(6).fill().map(() => Array(7).fill(0));
currentPlayer = 1;
gameActive = true;
document.getElementById('message').innerText = 'Player Red\'s turn';
document.getElementById('restart').style.display = 'none';
createBoard();
}

createBoard();
