// json stands for javascript object notation.
// json is lighweight format for storing and transporting DataTransfer.
// format for storing and transporting DataTransfer.
// json is often used when data is sent from a server to web.
const fs =require("fs");
const bioData ={
    name : "Aditya",
    age : 20,
    channel: "Aditya technical",
}

//convert to jeson
const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json" , jsonData, (err) => {
    console.log("Done!");
});