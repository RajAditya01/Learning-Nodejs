const fs = require("fs");
const http =require("http");

const server = http.createServer();

server.on('request' , (req , res) =>{
    // var fs =require('fs');
    // fs.readFile('input.txt', (err, data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    //2nd Way
    //Reading from a stream
    //create a readable stream
    //Handle stream event --> data, end , and error

    //const rstream = fs.createReadStream("input.txt");


    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end", ()=>{
    //     res.end();
    // });
    // rstream.on("error", (err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // });

    //3rd way
    const rstream =fs.createReadStream("input.js");
    rstream.pipe(res);
});

server.listen(5500, "127.0.0.1");