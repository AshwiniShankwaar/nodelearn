const dbconnect = require('./config');
const delet = async ()=>{
    const db = await dbconnect();
    let result = await db.deleteMany({name:'puja'});//for delete many use delete many
    console.log(result);
    (result.acknowledged)?console.log("data deleted"):console.log("some error occured ")
} 
module.exports = delet();