let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById(".score-board");
const userChImg = document.getElementById("user-ch");
const compChImg = document.getElementById("comp-ch");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function getComputerChoice(){   
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        compChImg.src="images/right_rock.jpg";
    }
    else if (randomNumber == 1){
        compChImg.src="images/right_paper.jpg";
    }
    else if (randomNumber == 2){
        compChImg.src="images/right_scissor.jpg";
    }
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function checkWinsOrLose(){
    if(userScore == 3){
        var person = prompt("congratulations you fucking won this shit. Do you wan to play again? ");
    }
    else if(computerScore == 3){
        alert("You lost!!");
    }
}


function wins(user, comp){
    userScore++;                 
    checkWinsOrLose();   
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}. You win!`;
    userChImg.classList.add('green-glow');
    compChImg.classList.add('red-glow');
}

function lose(user, comp){
    computerScore++;                 
    checkWinsOrLose();   
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)} loses to ${convertToWord(comp)}. You lost!`;    
    compChImg.classList.add('green-glow');
    userChImg.classList.add('red-glow');  
}

function draw(user, comp ){
    result_div.innerHTML = `${convertToWord(user)} equals ${convertToWord(comp)}. Its a draw!`;
    compChImg.classList.add('gray-glow');
    userChImg.classList.add('gray-glow');
}

function game(userChoice){   
    userChImg.classList.remove('green-glow');
    userChImg.classList.remove('red-glow');
    userChImg.classList.remove('gray-glow');
    compChImg.classList.remove('green-glow');
    compChImg.classList.remove('red-glow');
    compChImg.classList.remove('gray-glow');
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);               
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);  
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
}
}

function main() {
    
        rock_div.addEventListener('click', function(){
            userChImg.src="images/left_rock.jpg";
            game("r");
        })

        paper_div.addEventListener('click', function(){
            userChImg.src="images/left_paper.jpg";
            game("p");
        })

        scissor_div.addEventListener('click', function(){
            userChImg.src="images/left_scissor.jpg";
            game("s");
        })
}

main();