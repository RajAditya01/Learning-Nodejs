const fs = require("fs");
//creating a new file
fs.writeFileSync("read.txt", "hii i am aditya");
fs.appendFileSync("read.txt", " how are you i am fine thankuh");
fs.readFileSync("read.txt");
const bufData=fs.readFileSync("read.txt");
console.log(bufData);
//output
<Buffer 68 69 69 20 69 20 61 6d 20 61 64 69 74 79 61 20 68 6f 77 20 61 72 65 20 79 6f 75 20 69 20 61 6d 20 66 69 6e 65 20 74 68 61 6e 6b 75 68>