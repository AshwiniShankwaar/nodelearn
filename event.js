const express = require('express');
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();
let count = 0;
event.on("countApi",()=>{
    count++;
    console.log("Event called"+count);
});
app.get('',(req,res)=>{
    event.emit('countApi');
})
app.listen(4500);