//conditional statement
//if statement
let age=25;
if (age>18)
    {
        console.log("can vote");

    }
    //else if statement
    if (age<18){
        console.log("junior"); }
        else if (age>30){
            console.log("senior");
        }
        else{
            console.log("middle")
        }
        //ternary operators
        //condition? true output:false output
        age>=18 ? "adult" : "not adult";