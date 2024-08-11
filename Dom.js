// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.append(newbtn);
let btn = document.querySelector(".btn");
let currmode = "light";
btn.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if (currmode === "light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    
    console.log(currmode);
})

