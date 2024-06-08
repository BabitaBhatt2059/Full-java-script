//collection of item
let markss=[87,90,89,78,86]
console.log(markss)
console.log(markss.length)
//loop in array
//print all the element in array
//for loop
for (let i=0;i<markss.length; i++){
    console.log(markss[i]);

}
let sum=0;
let m= prompt("Enter the number 'n' till where you wanna sum of that prime number =");
for(let i=1; i<=m; i++){
    sum=sum+i;
}
console.log(sum);
// for loop from n (n-1) (n-2) ... 1

let n=prompt("Enter the number =");

for (let i=n; i>=1; i--){
    console.log("I am executing "+ i);

}