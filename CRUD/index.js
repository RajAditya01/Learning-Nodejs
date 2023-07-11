//CRUD
const fs = require("fs");
fs.mkdirSync("CRUD");
fs.writeFileSync("CRUD/aditya.txt", "hii this is me :)");
fs.appendFileSync("CRUD/aditya.txt", " this is append file");
const bufData = fs.readFileSync("CRUD/aditya.txt", "utf8");

// const fs = require('fs');
// const readline = require('readline');
// fs.rename("aditya.txt", "raj.txt",)