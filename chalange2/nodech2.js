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

//read file
fs.readFile("raj.txt", "utf-8", (err,data)=>{
    console.log(data);
});

//rename
fs.rename("raj.txt", "rajaditya.txt", (err)=>{
    console.log("rename Done!");
});
//file delete
fs.unlink("rajaditya.txt", (err)=>{
    console.log("file deleted!")
});

//create folder
fs.mkdir('aditya',(err)=>{
    console.log("folder created!");
});
//folder delete
fs.rmdir("name of folder",(err)=>{
    console.log("folder deleted!")
});