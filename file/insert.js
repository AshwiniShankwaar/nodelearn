const dbconnect = require('./config');
const insert = async ()=>{
    const db =  await dbconnect();
    let check = await (await db.find({name: "nitu",
    age: 19,
    }).toArray());
    let data = check.length;
    if(data == 0){
        let result = await db.insertMany([{//insertMany for multiple data and insert one for insert one data
        name: "nitu",
        age: 19,
        },{
            name:'tanu',
            age:16,
        }]);
        (result.acknowledged)?console.log("data inserted"):console.log("some error occured ")
    }else{
        console.log("data already exit")
    }
    

    //console.log(result);
    
}
insert();
