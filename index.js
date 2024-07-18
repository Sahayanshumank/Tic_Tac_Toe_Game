let boxes = document.querySelectorAll(".box");
let O = document.querySelector(".player-1")
let X = document.querySelector(".player-2")
let winBox = document.querySelector(".winner")
let turnO = true;

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
      box.style.color = "rgb(255,0,0)";
      X.style.backgroundColor = "rgb(194, 21, 73)"
      O.style.backgroundColor = "transparent"
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "rgb(43, 249, 21)";
      X.style.backgroundColor = "transparent"
      O.style.backgroundColor = "rgb(194, 21, 73)"
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

showWinner=(winner)=>{
  winBox.innerHTML=`Winner is ${winner}`
  winBox.classList.remove("hide")
}

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerHTML;
    let pos2Val = boxes[patterns[1]].innerHTML;
    let pos3Val = boxes[patterns[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val);
        showWinner(pos1Val);
        disableBoxes();
      }
    }
  }
};
