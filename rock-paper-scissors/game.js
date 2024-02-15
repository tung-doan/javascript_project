let computer = 0;
let player = 0;
let playerchoice = document.getElementById("playerchoice")
let computerchoice = document.getElementById("computerchoice")
let result = document.getElementById("result")
let game = ['rock', 'paper', 'scissors']

let final = document.getElementById("result1")
function playgame(choice) {
    let computerdisplay = game[Math.floor(Math.random() * 3)];
    playerchoice.textContent = `Player: ${choice}`;
    computerchoice.textContent = `Computer: ${computerdisplay} `
    switch (choice) {
        case 'rock':
            if (computerdisplay == 'rock') break;
            if (computerdisplay == 'paper') { computer += 1; break; }
            if (computerdisplay == 'scissors') player += 1; break;
        case 'paper':
            if (computerdisplay == 'rock') { player += 1; break; }
            if (computerdisplay == 'paper') break;
            if (computerdisplay == 'scissors') computer += 1; break;
        case 'scissors':
            if (computerdisplay == 'rock') { computer += 1; break; }
            if (computerdisplay == 'paper') { player += 1; break; }
            if (computerdisplay == 'scissors') break;
    }
    if (player == computer) final.textContent = "IT'S A TIE"
    if(player > computer){
        final.textContent = "YOU WIN"
        final.classList.add("greentext");
    }
    else if(player < computer){
        final.textContent = "YOU LOSE";
        final.classList.add("redtext");
    }
    result.textContent = `Result: player: ${player} computer: ${computer}`
}