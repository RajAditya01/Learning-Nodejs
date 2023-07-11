//CRUD
const fs = require("fs");
fs.mkdirSync("chalange");
fs.writeFileSync("aditya.txt" , "hii this is me :)");
fs.appendFileSync("aditya.txt" , " this is append file");

const fs = require('fs');
const readline = require('readline');
fs.rename("aditya.txt", "raj.txt",)