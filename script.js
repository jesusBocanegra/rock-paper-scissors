let gt = 0;
let gj = 0;
let gc = 0;

    function computerPlay() {
        let comp = Math.floor(Math.random() * (+3 + 1 - +1)) + +1;
        if (comp == 1) {
            return "rock";
        }
        if (comp == 2) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }
    
    let computerSelection = computerPlay();    
    function game() {
        let playerSelection = prompt("Choose an option between rock, paper or scissors: ");
        let playerLowerCase = playerSelection.toLowerCase();     
    
        if (playerLowerCase == "rock") {
            if (computerSelection == "paper") {
                result = "You lost";
                alert (result + ": paper beats rock!");
            }
            else if (computerSelection == "scissors") {
                result = "You won!";
                alert (result + ": rock beats scissors!");
            }
            else {
            result = "It's a tie!";
            alert (result);
            }
        }

        if (playerLowerCase == "paper") {
            if (computerSelection == "scissors") {
                result = "You lost";
                alert(result + ": scissors beat paper!");
            }
            else if (computerSelection == "rock") {
                result = "You won!";
                alert(result + ": paper beats rock!");
            }
            else {
                result = "It's a tie!";
                alert(result);
            }
        }

        if (playerLowerCase == "scissors") {
            if (computerSelection == "paper") {
                result = "You won!";
                alert(result + ": scissors beat paper!");
            }
            else if (computerSelection == "rock") {
                result = "You lost";
                alert (result + ": rock beats scissors!");
            }
            else {
                result = "It's a tie!";
                alert (result);
            }
        }

        if (result == "You won!") {
            gj = gj + 1;
            alert ("Games won by you: "+gj + ". Games won by the computer: "+gc +". Tied games: " + gt+".");
        }
        else if (result == "You lost") {
            gc = gc + 1;
            alert ("Games won by you: "+gj + ". Games won by the computer: "+gc +". Tied games: " + gt+".");
        }
        else {
            gt = gt+1;
            alert ("Games won by you: "+gj + ". Games won by the computer: "+gc +". Tied games: " + gt+".");
        }
    }

    for (let i = 0; i < 5; i++) {
        game();        
    }