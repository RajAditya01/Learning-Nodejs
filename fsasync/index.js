const fs=require("fs");
const { start } = require("repl");

fs.writeFile("read.txt","today is awsome day :)",(err) =>{
    console.log("files is created");
    console.log(err);
} );


// we pass them a function as an arrugunment - a callback -
// that get called when that task completes.
// The callback has an arrugunment that tells you wheater
// the operation complete successfully.TheNow we need to say what to do when fs.eritefile
// has completed (even if its nothing) and start
// checking for errors.