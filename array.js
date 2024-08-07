console.log("hello")
//sample array
let marks = [45,46,98.39]
console.log(marks);
console.log(marks.length)
let names = ["babi","kabi","nabi","rabi"];
for (
    let i=0; i<names.length; i++
)
{
    console.log(names[i]);
}
let Fruits = ["mango","banana","orange","strawberry"];
for(let Fruit of Fruits){
    console.log(Fruit.toUpperCase());

}
let vegeegs = ["potato","tomato","onion","garlic"];
console.log(vegeegs);
vegeegs.push("beans");//for adding any iteam to the end of array
console.log(vegeegs);
vegeegs.pop();//delete iteam from end and return
console.log(vegeegs);
console.log(vegeegs.toString());//converts array into string
let Girls =["babi","sabi","gita","bobby"];
let boys =["kapil","nabin","aayush"];
let student= Girls.concat(boys);//for merging
console.log(student);
Girls.unshift("nabina");//to add element at start 
console.log(Girls);
Girls.shift();//to remove element from 1st and return
console.log(Girls);
console.log(Girls.slice(1,3));//to return the peace of an array
Girls.splice(1,3,"nabina","boss");//to add element
console.log(Girls);


