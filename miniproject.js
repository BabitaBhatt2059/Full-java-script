let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO=true;//playerX,PlayerO
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true
    }
    box.disabled=true;
    checkwinner();
});
});
const disableBoxes=() =>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""

    }
}
const showWinner = (winner) =>{
msg.innerHTML=`congratulations , winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}
const checkwinner = () =>{
    for(let pattern of winpatterns){
    let pos1val=boxes[pattern[0]];
    let pos2val=boxes[pattern[1]];
    let pos3val=boxes[pattern[2]];
    if(pos1val!=""&& pos2val!=""&& pos3val!=""){
        if (pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
    }
}
};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);