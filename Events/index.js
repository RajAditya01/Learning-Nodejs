const EventEmitter =require("events");
const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log("your name is aditya");
});

event.on('sayMyName', ()=>{
    console.log("your name is raj");
});

event.on('sayMyName', ()=>{
    console.log("your name is ");
});

event.emit("cheakPage", 200, "ok");