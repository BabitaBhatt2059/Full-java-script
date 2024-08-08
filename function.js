// function Fun_name(msg)
// {
//     console.log(msg);
// };
// Fun_name("i love js");//arrow function
// const sum=(a,b)=>{
//     return a+b;

// };
//  let x=sum(5,8);
//  console.log(x);
//  const arrow_mult =(a,b)=>{
//     return a*b;
//  };
function countVowels(str){
  let count = 0;
  for (const char of str){
    if(char==="a" || char==="e" || char==="i"|| char==="o" || char==="u")
        {count ++;}
  } 
  console.log(count);
}
let arr=["delhi","lakhnow","banglore","mumbai"];
arr.forEach((val,idx,arr)=>
{
    console.log(val.toUpperCase(),idx,arr);
})
let nums =[67,52,39];
nums.map((val)=>
{
    console.log(val);
});
let sum =[6,8,9,7];
const output = sum.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(output);
let mult =[6,8,9,7];
const input = mult.reduce((prev,curr)=>{
    return prev < curr? prev:curr;
});
console.log(input);

