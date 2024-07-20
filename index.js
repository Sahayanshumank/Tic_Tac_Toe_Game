let boxes = document.querySelectorAll(".box");
// let box = document.querySelector(".box");
let O = document.querySelector(".player-1");
let X = document.querySelector(".player-2");
let winBox = document.querySelector(".winner");
let resetGame = document.querySelector("#reset");
let turnO = true;
O.style.backgroundColor = "rgba(37, 56, 34)";

// console.log(boxes)

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
    // console.log("Box Was Cliked");
    if (turnO) {
      box.innerHTML = "O";
      box.style.color = "rgb(0,255,0)";
      X.style.backgroundColor = "rgba(37, 56, 34)";
      O.style.backgroundColor = "transparent";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "rgb(255, 0, 0)";
      X.style.backgroundColor = "transparent";
      O.style.backgroundColor = "rgba(37, 56, 34)";
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
  winBox.innerHTML = `${winner}  HAS  WON!`;
  winBox.classList.remove("hide");
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerHTML;
    // console.log(boxes[patterns[0]])
    let pos2Val = boxes[patterns[1]].innerHTML;
    // console.log(boxes[patterns[1]])
    let pos3Val = boxes[patterns[2]].innerHTML;
    // console.log(boxes[patterns[2]])

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val);
        showWinner(pos1Val);
        disableBoxes();
        if (pos1Val === "O") {
          turnO = false;
          // console.log("winner=0")
        } else {
          turnO = true;
        }
        X.style.backgroundColor = "transparent";
        O.style.backgroundColor = "transparent";
        if (turnO = true) {
          O.style.backgroundColor = "rgba(37, 56, 34)";
        } else {
          X.style.backgroundColor = "rgba(37, 56, 34)";
        }
        // boxes[patterns[0]].style.backgroundColor = "#fbff0079";
        // boxes[patterns[1]].style.backgroundColor = "#fbff0079";
        // boxes[patterns[2]].style.backgroundColor = "#fbff0079";
        boxes[patterns[0]].classList.add("win-bg");
        boxes[patterns[1]].classList.add("win-bg");
        boxes[patterns[2]].classList.add("win-bg");
      }
    }
  }
};

boxes.forEach((box) => {
  resetGame.addEventListener("click", () => {
    box.disabled = false;
    // console.log("Hello");
    box.innerHTML = "";
    box.classList.remove("win-bg");
    // turnO = true;
    winBox.classList.add("hide");
    
    
    // boxes.style.backgroundColor = "White"
  });
});
