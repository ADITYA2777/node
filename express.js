
const express = require("express");

const app = express();

const Port = 4011;

const HOSTNAME =  `localhost`;

app.get('/',(req,res)=>{
    res.send('<h1>hello world!!</h1>')
})
app.get('/ about',(req,res)=>{
    res.send('hello about!!')
})
app.get('/ contact',(req,res)=>{
    res.send('hello contact!!')
})

app.listen(Port,()=> {
    console.log(`server running at ${HOSTNAME}: $${Port}`);
});