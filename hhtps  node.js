

const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        res.write('<h1> hello ,its me node.js</h1>');
    }
    res.end();
});

server.listen(5003);

console.log('THE HTTP server is running on 5003');