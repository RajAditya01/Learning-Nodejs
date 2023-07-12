//challenge time
const fs = require("fs");
//create file
fs.writeFile("raj.txt","Hii i am Raj!",(err)=>{
    console.log(err);
});

//append file
fs.appendFile("raj.txt"," i am learning nodejs:)",(err)=>{
    console.log(err);
});