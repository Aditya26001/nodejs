var name = "Aditya";
var age  =  22;
var hobby = true;

//function summarizeUser(userName , userAge , userHobby){
    //return "Name is " + userName;
//}


//let name = "Adi";
//let age = 21;
//age = 24;

//const agee = 55; //nhi change hoga

//arrow functions
const summarizeUser = (userName , userAge , userHobby) =>{
    
    return "Name is " + userName;
}

const add = (a,b) => a+b;
const addOne = a =>a+1;
const addrandom = () => 2+3;
console.log(add(1,2));
console.log(summarizeUser(name,age,hobby));
