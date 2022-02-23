// Api using mongodb driver


const express = require('express');
const dbconnect = require('../file/config.js');
const app = express();
const mongodb = require('mongodb')
app.use(express.json());
app.get('',async (req,res)=>{
    let db = await dbconnect();
    let data = await (await db.find({}).toArray());
    res.send(data);
    //console.log(data);
});
app.post("",async (req,res)=>{
    let db = await dbconnect();
    let result = await db.insertOne(req.body);
    res.send(result);
    //console.log(req.body);
})
app.put("/:name",async(req,res)=>{//use :params name to get the parameter from the url
    let db = await dbconnect();
    let result = db.updateOne({name:req.params.name},{$set:req.body});//to access the url use the req.params
    res.send(result); 
})
app.delete("/:_id",async(req,res)=>{
    let db = await dbconnect();
    let data = await db.deleteOne({_id:new mongodb.ObjectId(req.params._id)});
    res.send(data);
})
app.listen(4500);