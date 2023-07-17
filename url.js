
const { error } = require('console');
const http = require('http');
const { json } = require('node:stream/consumers');

const Port = 3022;
const HOSTNAME ='localhost';

const server = http.createServer((req, res)=>{
//  homepage
// aboutpage
// conatactpage
// productpage
// rest... error
    if (req.url =='/') {
        res.statusCode=200;
        res.setHeader('content-text','text/plain');
        res.end('welcome to node js server by adityajain');
    }else if(req.url=='/about'){
        res.statusCode=200;
        res.setHeader('content-text','text/plain');
        res.end('aboutpage!');
    } else if(req.url=='/contact'){
        res.statusCode=200;
        res.setHeader('content-text','text/plain');
        res.end('contact!');
    }else if(req.url=='/product'){

        const options ={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        
        const apiReq = http.request(options,(apiRes)=>{
            apiRes.on("data",(Date)=>{
                res.statusCode= 200;
               res.setHeader('content-type','application/json');
               res.end((data.toString()));
            })
        });
        apiReq.on("error",()=>{
            console.log(e);
        });
        
        apiReq.end()

    }else{
        res.statusCode=500;
        res.setHeader('content-type','text/plain');
        res.end('serve error!')
    }
})

server.listen(Port, () => {
  console.log(`Server running at ${HOSTNAME}:${Port}`);
});