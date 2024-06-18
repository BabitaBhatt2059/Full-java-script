// A function is a block of code that performs a specific task.


// Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

// a function to draw the circle
// a function to color the circle



// Declearing a function

function nameOfFunction(){
    //Code to be executed
    console.log("Hello World");    
}
// Calling a function
nameOfFunction();
// Constructor function

function Person()
{
    this.name ='pradip',
    this.age = 22
};

//create the object 
let person = new Person();

console.log(person.name);

// In the above example function Person () is an object constructor function

// To create an object Constructor function , we can use the new keyword

// Note: It is considered a good practice to capitalize the first letter of your constructor function.