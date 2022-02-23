const os = require('os');
console.log(os.arch());//artchitecure
console.log(os.freemem()); //in bit
console.log(os.freemem()/Math.pow(1024,3));//in gb for mb power 2
console.log(os.totalmem()/Math.pow(1024,3));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.userInfo().username);