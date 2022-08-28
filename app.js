let selectedOption;
let computerOption;
let scoreHistory = document.querySelector("#scoreHistory");
let scoresOutput = document.querySelectorAll(".score");
let tie = document.querySelector("#tie");
let playerScore = 0;
let computerScore = 0;

let options = document.querySelectorAll(".option");
options.forEach(option => {
    option.addEventListener("click", () => {
        //assign value of player inputted option
        selectedOption = option.id;
        DisplayChoice();
        DisplayScore();
    })
})


function DisplayChoice() { 
   let scoreBox = document.createElement("div");
   scoreBox.classList.add("scoreBox")
   scoreHistory.append(scoreBox);
   let scoreBox2 = document.createElement("div");
   scoreBox2.classList.add("scoreBox")
   scoreHistory.append(scoreBox2);
   
   let choice = document.createElement("div");
   choice.classList.add("choice");
  
   let choice2 = document.createElement("div");
   choice2.classList.add("choice");
 

    //Player output
    selectedOption = selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1);
    choice.innerHTML = selectedOption;
    scoreBox.appendChild(choice);

    //CPU output
    choice2.innerHTML = GenerateComputerChoice();
    scoreBox2.appendChild(choice2);




}

function GenerateComputerChoice() {
    let min = Math.ceil(1);
    let max = Math.floor(3)
    const computerOptionInt = Math.floor(Math.random() *(max-min + 1)) + min;
    switch(computerOptionInt) {
        case 1: 
            computerOption = "Rock";
            return computerOption;
        case 2: 
            computerOption = "Paper";
            return computerOption;
        case 3:
            computerOption = "Scissors";
            return computerOption;
    }
}

function DisplayScore() {

    //player wins
    if((selectedOption == "Paper") && (computerOption == "Rock")) {
        playerScore++;
        scoresOutput[0].innerHTML = playerScore;
        tie.innerHTML = "";
    }

    if((selectedOption == "Rock") && (computerOption == "Scissors")) {
        playerScore++;
        scoresOutput[0].innerHTML = playerScore;
        tie.innerHTML = "";
    }

    if((selectedOption == "Scissors") && (computerOption == "Paper")) {
        playerScore++;
        scoresOutput[0].innerHTML = playerScore;
        tie.innerHTML = "";
    }

    //tie 
    if((selectedOption == "Rock") && (computerOption == "Rock")) {
        tie.innerHTML = "Tie!";
    
    }
    if((selectedOption == "Paper") && (computerOption == "Paper")) {
        tie.innerHTML = "Tie!";
    
    }
    if((selectedOption == "Scissors") && (computerOption == "Scissors")) {
        tie.innerHTML = "Tie!";
   
    }


    //cpu wins

    if((selectedOption == "Rock") && (computerOption == "Paper")) {
        computerScore++;
        scoresOutput[1].innerHTML = computerScore;
        tie.innerHTML = "";
    }
    
    if((selectedOption == "Scissors") && (computerOption == "Rock")) {
        computerScore++;
        scoresOutput[1].innerHTML = computerScore;
        tie.innerHTML = "";
    }
    if((selectedOption == "Paper") && (computerOption == "Scissors")) {
        computerScore++;
        scoresOutput[1].innerHTML = computerScore;
        tie.innerHTML = "";
    }
    
    
}