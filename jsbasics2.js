//objects
const person = {
    name: 'Aditya',
    age : 55,
    greet(){
        console.log("Hi  , I am " + this.name);
    }//no arrow function no colon
}

//     //person.greet();

const hobbies = ['sports','cooking',1,true,{}]
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby=> 'Hobby:'+ hobby)); 
// //objects and arrays are reference types
// hobbies.push('JhGG');
// console.log(hobbies); //no error even if it is const


// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const copiedArray2 = [...hobbies]; ///spread operator
// console.log(copiedArray2);

// const toArray = (...args)=>{ //rest operator
//     return args;
// }
// console.log(toArray(1,2,3,4 , 5));

//destructuring

const printName = ({name}) =>{
    console.log(name);
}

printName(person);

//without functions

const{name , age} = person;
console.log(name,age);

//for array
const [hobby1 , hobby2] = hobbies;
console.log(hobby1, hobby2); //no brackets in o/p