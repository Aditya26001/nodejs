const http = require('http'); //it looks for global module.
const { text } = require('stream/consumers');
const routes = require('./routes');
// function rqListner(req,res){

// }

//http.createServer(rqListner);

const server = http.createServer(routes);
    //console.log(req.url , req.method , req.headers);
    
    

server.listen(3000);