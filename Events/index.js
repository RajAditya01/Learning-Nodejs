const EventEmitter =require("events");
const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log('your name is aditya');
})

event.emit("sayMyName");