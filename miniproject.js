let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // true for Player O, false for Player X

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkDraw = () => {
    // Check if all boxes are filled and no winner has been found
    const allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled) {
        showWinner("No one, it's a draw!");
    }
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val && pos2val && pos3val) {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner:", pos1val);
                showWinner(pos1val);
                return; // Exit early since we have a winner
            }
        }
    }
    checkDraw(); // Check if the game is a draw
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (!box.innerText) { // Only allow action if the box is empty
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;
            box.disabled = true;
            checkWinner();
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
