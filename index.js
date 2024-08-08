let boxes = document.querySelectorAll(".box");
let O = document.querySelector(".player-1");
let X = document.querySelector(".player-2");
let winBox = document.querySelector(".winner");
let resetGame = document.querySelector("#reset");
let wrapper = document.querySelector(".wrapper");
let turnO = true;
let winner = false;

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
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#e0e1dd";
      X.classList.remove("active");
      O.classList.add("active");
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
    console.log(box.disabled);
  });
};

const showWinner = (winner) => {
  winBox.innerHTML = `${winner} HAS WON!`;
  winBox.classList.add("active-popup");
  wrapper.classList.add("win");
  O.classList.add("win");
  X.classList.add("win");
};

const showDraw = () => {
  winBox.innerHTML = `IT'S A DRAW!`;
  winBox.classList.add("active-popup");
  wrapper.classList.add("win");
  O.classList.add("win");
  X.classList.add("win");
};

const checkDraw = () => {
  let draw = true;
  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      draw = false;
    }
  });
  if (draw && !winner) {
    showDraw();
  }
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerHTML;
    let pos2Val = boxes[patterns[1]].innerHTML;
    let pos3Val = boxes[patterns[2]].innerHTML;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableBoxes();
        winner = true;
        X.classList.remove("active");
        O.classList.remove("active");

        boxes[patterns[0]].classList.add("win-bg");
        boxes[patterns[1]].classList.add("win-bg");
        boxes[patterns[2]].classList.add("win-bg");
        return;
      }
    }
  }
  checkDraw();
};

resetGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    box.classList.remove("win-bg");
    winBox.classList.remove("active-popup");
    wrapper.classList.remove("win");
    O.classList.remove("win");
    X.classList.remove("win");
  });
  winner = false;
  if (turnO) {
    O.classList.add("active");
  } else {
    X.classList.add("active");
  }
});
