const express = require('express');
const mongodb = require('mongodb');
const videosmodel = require('./mongooseConfig');
const app = express();
app.use(express.json());
app.get('',async(req,res)=>{
    let data = await videosmodel.find();
    res.send(data);
});
app.post('',async(req,res)=>{
    let data = new videosmodel(req.body);
    let result = await data.save();
    res.send(result);
});
app.put('/:name',async(req,res)=>{
    let data = await videosmodel.updateOne({name:req.params.name},{$set:(req.body)});
    res.send(data);
});
app.delete('/:_id',async(req,res)=>{
    let data = await videosmodel.deleteOne(req.params);
    res.send(data);
});
app.listen(4500);