let divs = document.querySelectorAll(".dabba");
divs[0].innerText="helooo Babi";
divs[1].innerText="helooo Ramesh";
divs[2].innerText="helooo Ganesh";
let idx=1;
for  (div of divs) {
    div.innerText = 'new unique value "${idx}';
    idx++;
}

