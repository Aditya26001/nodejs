const http = require('http'); //it looks for global module.
const { text } = require('stream/consumers');
const fs = require('fs');
// function rqListner(req,res){

// }

//http.createServer(rqListner);

const server = http.createServer((req,res)=>{
    //console.log(req.url , req.method , req.headers);
    const url = req.url;
    const method  = req.method;
    
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url==='/message' && method ==='POST'){ 
        //to read the data sent
        //can be done easily with express js
        const body = [];
        req.on('data' , (chunk) =>{
            console.log(chunk);
            body.push(chunk);

        });

        return req.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();  //conversion into string
            //console.log(parsedBody);
            //storing in a file
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt' , message); //the sync keyword stops the execution of next lines untill the file is created. If the file is of huge size, then it will be visible. The requests sent by the user will also get blocked. 

            fs.writeFile('message.txt' , message , err =>{ //this does not bock the code execution
                 res.statusCode = 302;
                 res.setHeader('Location' , 'https://fast.com/'); //redirection
                 return res.end();
            })

        })
        
    }
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First page</title></head>')
    res.write('<body>Hello from my first NodeJs server</body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);