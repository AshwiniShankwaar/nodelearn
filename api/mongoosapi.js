const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");
const videossch = new mongoose.Schema({
    name:String,
    age:Number
});
const savedata = async ()=>{
    const videosmodel = mongoose.model('videos',videossch);
    let data = new videosmodel({name:'sexy_puja',age:18});
    let result = await data.save();
    console.log(result);
}
const updatedata = async() =>{
    const videosmodel = mongoose.model('videos',videossch);
    let data = await videosmodel.updateOne({name:'sexy_puja'},{$set:{age:16}});//to update multiple add update many
    console.log(data);
}
const deletedata = async() =>{
    const videosmodel = mongoose.model('videos',videossch);
    let data = await videosmodel.deleteOne({name:'sexy_puja'});
    console.log(data);
}
const finddata = async() =>{
    const videosmodel = mongoose.model('videos',videossch);
    let data = await videosmodel.find();
    console.log(data);
}
finddata();
//app.listen(4500);