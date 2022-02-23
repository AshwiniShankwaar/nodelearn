const express = require('express');
const mongodb = require('mongodb');
const videosmodel = require('./mongooseConfig');
const app = express();
app.use(express.json());
app.get('/:key',async(req,res)=>{
    //console.log(req.params.key);
    let data = await videosmodel.find(
        {
            "$or":[
                {'name':{$regex:req.params.key}}//search key shoud be paticular
                //{'age':{$regex:req.params.key}}
            ]
        }
    )
    await (data.length == 0)?res.send("no data"):res.send(data);
});
app.listen(4500);