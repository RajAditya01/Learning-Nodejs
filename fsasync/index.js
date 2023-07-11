const fs=require("fs");

fs.writeFile("read.txt","today is awsome day :)",(err) =>{
    console.log("files is created");
    console.log(err);
} );
