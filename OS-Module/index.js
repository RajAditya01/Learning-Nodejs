const os= require("os");

console.log(os.arch());

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const mem1=os.freemem();
// console.log(`${mem1/1024/1024/1024}`);

// const mem=os.totalmem();
// console.log(`${mem/1024/1024/1024}`);