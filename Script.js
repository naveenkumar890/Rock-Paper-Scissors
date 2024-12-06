let userScore=0;
let computerScore=0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText = " Game Draw !";
    msg.style.backgroundColor = "black";
};
const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log(" you win");
        msg.innerText = `you win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }else{
        computerScore++;
        compScorepara.innerText=computerScore;
        console.log("you lose");
        msg.innerText = `you lose ! computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
};
const genComputerChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame = (userChoice) =>{
    console.log("your choice",userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice",compChoice);
    if(userChoice === compChoice){
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper"? false: true;
    }else if(userChoice === "paper"){
    userWin = compChoice === "scissor"? false : true;
    } else{
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, userChoice,compChoice);
   }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
