const os = require('os');

console.log("cpu architecture:" + os.arch());

console.log("free memory:" + os.freemem());

console.log("Total memeory:" + os.totalmem());

console.log("Network Interface:" + JSON.stringify(os.networkInterfaces()));


console.log("os default tempt dir:" + os.tmpdir())


console.log("endianness "+ os.endianness());

console.log("hostname " + os.hostname());

console.log("type " + os.type());

console.log("realse " + os.release());

console.log("platform " + os.platform());

// OS MODULE METHOD NOTE