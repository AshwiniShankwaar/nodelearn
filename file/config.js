const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function dbconnect(){
    let result = await client.connect();//it return a promise to handle the promise we use await
    //and async function 
    let db = result.db('test');
    return db.collection('videos');
    //let data = await collection.find({}).toArray();
    //console.log(data);
}
module.exports = dbconnect;