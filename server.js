const http = require('http'); //it looks for global module.
const { text } = require('stream/consumers');

// function rqListner(req,res){

// }

//http.createServer(rqListner);

const server = http.createServer((req,res)=>{
    //console.log(req.url , req.method , req.headers);
    const url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>My First page</title></head>')
        res.write('<body>Without any text after /</body>')
        res.write('</html>')
        return res.end();
    }
    
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First page</title></head>')
    res.write('<body>Hello from my first NodeJs server</body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);