
// const http = require('http');

// const { json } = require('stream/consumers');

// const Port =1919;
// const HOSTNAME = 'localhost';

// const server = http.createServer((req,res)=>{
//     res.statusCode = 500;
//     res.setHeader('Content-Type','applicaton/json');
//   res.end(json.stringify({error:"server Error!"}));
// });

// server.listen(Port, () => {
//   console.log(`Server running at ${HOSTNAME}:${Port}`);
// });
const http = require('http');

const options ={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apiReq = http.request(options,(apiRes)=>{
    apiRes.on("data",(Date)=>{
        console.log(Date.toString());
    })
});
apiReq.on("error",()=>{
    console.log(e);
});

apiReq.end()