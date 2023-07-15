const express = require("express");
const app = express();
const PORT = 5500;

const  sendMail= require("./controllers/sendMail");

app.get("/", (req, res) =>{
    res.send("I am server...");
});

app.get("/sendmail",sendMail)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`I am live on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();

// const express = require("express");
// const app = express();
// let PORT=5500;

// app.get("/", (req, res) =>{
//     res.send("I am server...");
// });

// const start =async() =>{
//     try{
//         app.listen(PORT,()=>{
//             console.log(`I am live in port no. 5500 ${PORT}`);
//         });
//     }catch(error){}
// };