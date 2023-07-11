//CRUD
const fs = require("fs");
//fs.mkdirSync("CRUD");
fs.writeFileSync("aditya.txt", "hii this is me :)");
fs.appendFileSync("aditya.txt", " this is append file");
const bufData = fs.readFileSync("aditya.txt", "utf8");

fs.renamesync("aditya.txt", "raj.txt");
//delete
fs.unlinkSync("aditya.txt");