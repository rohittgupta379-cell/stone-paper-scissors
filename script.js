let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");  // ✅ fixed
const compscorePara = document.querySelector("#comp-score");  // ✅ fixed

const gencompchoice = () => {
    const compchoices = ['rock', 'paper', 'scissors'];
    const randomnum = Math.floor(Math.random() * 3);
    return compchoices[randomnum];
};

const playgame = (choiceId) => {
    const compchoice = gencompchoice();
    console.log("Computer choice:", compchoice);

    if (choiceId === compchoice) {
        msg.innerText = "Game is a tie. Please play again!";
        msg.style.background = "orange";
    }
    else if (
        (choiceId === 'rock' && compchoice === 'scissors') ||
        (choiceId === 'paper' && compchoice === 'rock') ||
        (choiceId === 'scissors' && compchoice === 'paper')
    ) {
        userscore++;
        msg.innerText = `You WIN! 🎉 ${choiceId} beats ${compchoice}`;
        msg.style.background = "green";
        userscorePara.innerText = userscore;   // ✅ update user score
    } 
    else {
        compscore++;
        msg.innerText = `You LOSE! ❌ ${compchoice} beats ${choiceId}`;
        msg.style.background = "red";
        compscorePara.innerText = compscore;   // ✅ update comp score
    }
};

// ✅ Event listener
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");  
    playgame(choiceId);
  });
});
