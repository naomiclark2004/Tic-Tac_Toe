function startGame() {
    if (Math.random() < .3){
        document.turn = "O";
    } else {
        document.turn = "X";
    }
    document.getElementById("turn").innerHTML="Turn: 1" ;
    document.getElementById("player").innerHTML="Player:  " + document.turn;
    document.winner = null;
    
    setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null){
        setMessage(document.winner  + " already won the game.");
    } else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("That square is already taken.");
    }
}

function updateScoreBoard(){
    if (checkForWinner(document.turn)) {
        if(document.turn === "X"){
            x++;
            document.getElementById("xScore").innerHTML= "- "+ x;
        }
        if(document.turn === "O"){
            o++;
            document.getElementById("oScore").innerHTML="- " + o;
        }
    }
}

var moveCounter = 1;
var x = 0;
var o = 0;

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Congratulations,   " + document.turn + "   you win!");
        document.winner = document.turn;
        moveCounter = 0;
        updateScoreBoard();
    } else if (moveCounter % 9 == 0){
        setMessage("It's a tie!");
    } 
    else if (document.turn == "X") {
        moveCounter++;
        setMessage("");
        document.getElementById("turn").innerHTML="Turn: " + moveCounter;
        document.turn = "O";
        document.getElementById("player").innerHTML="Player: O";
    } else {
        moveCounter++;
        document.getElementById("turn").innerHTML="Turn: " + moveCounter;
        document.turn = "X";
        document.getElementById("player").innerHTML="Player: X";
    }
}

function checkRows(a, b, c, move) {
    var result = false;
        if (getBox (a) == move && getBox (b) == move && getBox (c) == move){
            result = true;
        }
    return result;
}

function checkForWinner(move) {
    var result = false;
    if (checkRows (1, 2, 3, move) ||
        checkRows (4, 5, 6, move) ||
        checkRows (7, 8, 9, move) ||
        checkRows (1, 4, 7, move) ||
        checkRows (2, 5, 8, move) ||
        checkRows (3, 6, 9, move) ||
        checkRows (1, 5, 9, move) ||
        checkRows (3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function getBox (number) {
    return document.getElementById("s" + number).innerText;
}

function resetGame() {
    for(let i = 1; i <= 9; i++){
        document.getElementById('s' + i).textContent = "";
        startGame();
    }
    return moveCounter = 1;
}

function reload(){
    location.reload();
}