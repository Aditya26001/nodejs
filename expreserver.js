const http = require('http');
const express = require('express'); //exports a function

const app = express();


app.use((req,res,next)=>{ //helps to move to other middlewares
    console.log("In the middleware");
    next();  //-------------
});                     // |
                        // |
                        // |
app.use((req,res,next)=>{
    console.log("In another middleware");
    res.send('<h1>Hello from express</h1>')
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);


