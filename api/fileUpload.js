const express = require('express');
const multer = require('multer');
const path = require('path');
const app =  express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {//cb is call back
      cb(null, path.join(__dirname,"/upload"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".jpg")
    }
  })
  
const upload = multer({ storage: storage }).single("file");
app.post('',upload,(req,res)=>{

});
app.listen(4500);