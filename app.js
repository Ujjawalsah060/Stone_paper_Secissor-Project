let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userScore");
const compscorepara = document.querySelector("#compScore");

const gencompChoice = () => {
    const Option = ["rock", "paper", "scissors"];
    const Index = Math.floor(Math.random() * 3);
    return Option[Index];
};

const gameDraw = () => {
    msg.innerText = "Game was draw. Play again!";
};

const playGame = (userChoice) => {
    //computer generation
    const comChoice = gencompChoice();

    if (comChoice === userChoice) {
        //game draw;
        gameDraw();
    } else {
        let userWin = true;

        if (userChoice === "rock") {

            //paper ,scissors
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {

            //rock ,paper
            userWin = comChoice === "scissors" ? false : true;
        } else {

            //paper,scissor
            userWin = comChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, comChoice);
    }
};

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
    } else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `You lost! ${comChoice} beats your ${userChoice}`;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
