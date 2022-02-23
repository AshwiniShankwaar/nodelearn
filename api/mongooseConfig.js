const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");
const videossch = new mongoose.Schema({
    name:String,
    age:Number
});
const videosmodel = mongoose.model('videos',videossch);
module.exports = videosmodel;