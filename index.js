
const fs = require('fs');
const { buffer } = require('stream/consumers');

// asynchronous way to read file
console.log('READ START');
fs.readFile('index.txt',function (err, data) {
    if (err) {
        console.log('Error:',err);
        return err;
    }
    console.log('data:',data.toString());
    console.log('READ END');
    return data;
})
console.log('OTHER STUFF');

// synchornous way to read to file
console.log('get read');

let data = fs.readFileSync('index.txt');
console.log('data:',data.toString());
console.log('get END');
console.log('OTHER STUFF');

// READ > OPEN + READ

const buf = new Buffer(1024);

fs.open('index.txt','r+', function (err,fd) {
    if (err) {
       console.log('error in ipenung files',err); 
    }
    console.log('files open sucessfully !! ');
    fs.read(fd,buf,0,buf.length,0, function(er,byte){
        if (er) {
           console.log('error in reading files!'); 
        }
        console.log('data:', byte);
        console.log('data:', buf.slice(0,byte).toString());

// colose method

        fs.close(fd ,function(err){
         if (err) {
            console.log('error is coming out colse');
         }else{
            console.log('success colse ');
         }
        })
    })
});


// write file

fs.writeFile('index.txt','aditya schools',function(err){
    if (err) {
        console.log('error writing file');
    }
   else{
    console.log('sucessfully is done !!!');
   }
})

// appened method

fs.appendFile('index.txt','__jain_-cool','utf-8',function(err){
    if (err) {
        console.log('error append file');
    }
   else{
    console.log('sucessfully is done !!!');
   }
})

// deleting method

fs.unlink('index.txt',function(err){
    if (err) {
        console.log('error dele file');
    }
   else{
    console.log('sucessfully is done !!!');
   }
})