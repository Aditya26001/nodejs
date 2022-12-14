//Asynchronous code has delay

setTimeout(()=>{
    console.log('Timeout');
},2000);

//synchronous

console.log('hello');
console.log('hi');

//these two lines will gets executed before the habove
//js does not wait for async code to get executed
//once time is over it executes 
