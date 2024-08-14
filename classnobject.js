let data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",data);
    }
}
class Admin extends user{
    constructor(name,email){
      super(name,email)  
    }
}
let student1=new user ("bobby","bhatt@gmail.com");
let student2=new user ("helen","pant@gmail.com");