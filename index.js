let boxes = document.querySelectorAll(".box");
let O = document.querySelector(".player-1");
let X = document.querySelector(".player-2");
let winBox = document.querySelector(".winner");
let resetGame = document.querySelector("#reset");
let wrapper = document.querySelector(".wrapper");
// let chance = document.querySelector(".chance");
// let player = document.querySelector(".player");
let turnO = true;
window.myGlobalVar = turnO;
// O.style.backgroundColor = "rgba(37, 56, 34)";
O.classList.add("active");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      box.style.color = "#e0e1dd";
      O.classList.remove("active");
      X.classList.add("active");
      // O.style.backgroundColor = "transparent";
      // X.style.backgroundColor = "rgb(52, 165, 165,0.5)";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#e0e1dd";
      X.classList.remove("active");
      O.classList.add("active");
      // X.style.backgroundColor = "transparent";
      // O.style.backgroundColor = "rgb(52, 165, 165,0.5)";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

showWinner = (winner) => {
  // winBox.classList.remove("hide");
  winBox.innerHTML = `${winner}  HAS  WON!`;
  winBox.classList.add("active-popup");
  wrapper.classList.add("win");
  // chance.classList.add("win")
  // player.classList.add("win")
  O.classList.add("win");
  X.classList.add("win");
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerHTML;
    let pos2Val = boxes[patterns[1]].innerHTML;
    let pos3Val = boxes[patterns[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableBoxes();
        // X.style.backgroundColor = "transparent";
        // O.style.backgroundColor = "transparent";
        X.classList.remove("active");
        O.classList.remove("active");
        if (pos1Val === "O") {
          turnO = false;
        } else {
          turnO = true;
        }

        boxes[patterns[0]].classList.add("win-bg");
        boxes[patterns[1]].classList.add("win-bg");
        boxes[patterns[2]].classList.add("win-bg");
      }
    }
  }
};

resetGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    box.classList.remove("win-bg");
    // winBox.classList.add("hide");
    winBox.classList.remove("active-popup");
    wrapper.classList.remove("win");
    // chance.classList.remove("win")
    // player.classList.remove("win")
    O.classList.remove("win");
    X.classList.remove("win");
  });
  console.log(turnO);
  if (turnO === true) {
    // O.style.backgroundColor = "rgb(52, 165, 165)";
    O.classList.add("active");
    // console.log("O");
  } else {
    // X.style.backgroundColor = "rgb(52, 165, 165)";
    X.classList.add("active");
    // console.log("X");
  }
});
