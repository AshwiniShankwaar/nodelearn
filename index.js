const express = require('express');
const dbconnect = require('./file/config');
const app = express();
app.set('view engine','ejs');

app.listen(4500);
/* config file 
async function dbconnect(){
    let result = await client.connect();//it return a promise to handle the promise we use await
    //and async function 
    let db = result.db('test');
    return db.collection('videos');
    //let data = await collection.find({}).toArray();
    //console.log(data);
}*/
/*dbconnect().then((resp)=>{
    resp.find({}).toArray().then((item)=>{
        console.log(item);
    })
}) or */
/* data base connect and task
const main = async()=>{
    let data = await dbconnect();
    //data = await data.find({}).toArray();// for all data
    data = await data.find({name:'besti'}).toArray();//for single data
    console.log(data);
}
main();*/
//console.log(dbconnect());



//setting a filter middleware you can also keep the middleware in the next page 
//and export in the place where you want to use
//to use mongodb we can use the command 'mongosh' in command line interface
//to use the mongodb compass we can use the 'mongodb-compass' command
/**
 * mongodb commands
 * show dbs //to see all the dbs
 * use database_name //create new database
 * db.createCollection('collection_name') //create collection
 * to know the database use db command
 * db.dropDatabase() // command to drop the database first need to use the database that need to delete
 * show collections //show collections
 * db.collection_name.drop()// to drop the collection 
 * db.collection_name.insert({data:value,data2:value2},{data:value,data2:value2})
 * db.collection_name.deleteOne({selection_attribute:data})//to delete one item from the collection
 * db.collection_name.find()//to view all the data in the collection use .pretty() to see in a good view
 * db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)// to update the data
 * db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})//to save the collection 
 * db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)//delete
 */
/*const reqfilter = (req,res,next)=>{
    let age = req.query.age;
    if(age <18){
        res.send("18 year of age is required");
    }else{
        next();
    }
}*/
/*app.use(reqfilter);//allowed in all the rout its a application middleware*/
/*app.get('',(req,res)=>{
    res.render('home');
});
app.get('/login',(req,res)=>{
    const data = {
        name:'ashwini',
        lastname:'shankwaar',
        age:25
    }
    res.render('login',{data});
});
app.get('/profile',reqfilter,(req,res)=>{
    const data = {
        name:'ashwini',
        lastname:'shankwaar',
        age:25
    }
    res.render('profile',{data});
});
app.listen(4500);
*/

/*<!--to get the variable or the data from the ejs use <%= %>-->
   <!-- <ul>
        <%= data.name.foreach((item)=>{%>
            <li><%=item%></li>
            <%=})%>
    </ul>-->*/
/*const http = require('http');
var colors = require('colors');
//const data = require('./data');
const data = require('./app');
//console.log(data.z());
//express js is a frame work inside a node js
//router in node js
const express = require('express');
const app = express();
app.set('view engine','ejs');
/*const staticfilepath = path.join(__dirname,"static folder name");
app.use(express.static(staticfilepath));*/
/*
app.get("",(req,res)=>{
    //to render html file using router 
    //res.sendFile('file path');
    /*console.log(req.hostname + " "+ req.query.name);//to recive the query from the url 
    res.send(`<div>
    <h1>enter the name</h1>
    <input type="text" placeholder="hello" />
    </div>`);*/
    /*
});
app.get("/about",(req,res)=>{
    res.send("from about page");
});
app.get("/help",(req,res)=>{
    res.send("from help page");
});
app.get("/profile",(req,res)=>{
    const data = {
        name:'ashwini',
        lastname:'shankwaar',
        age:25
    }
    res.render("profile",{data})
})
//app.get("*",(req,res)=>{
  //  res.send(`not a valid page move to home page `);
//})
app.listen(4500);

/**node js working
 * call stack : when a code is executed the all the function will be stored inside the call stack 
 * where the first function to be added in the call stack is the main function. asa the task of the function
 * came to an end then the function will automaticly removed from the call stack
 * 
 * node api: contain the function that are not the part of the node javascript 
 * can be a part of c or c++ it contain all the inherit function 
 * 
 * call back queue: all the node api function move from node api to call back queue as node api need the empty call stack to work
*/
/* curd operation with fs module
file to create and write in it fs.writefilesync(filepath,'data to insert in file') function in file module and fs.unlinksync(filename) to delete the file
 * __dirname to get the directory of the file require('path')
 * to read the file fd.readdir(filepath,(err,files)=>{statement to do})
 * crud(create read update delete) in file system 
 * fs.appendFile(filename,'data to add',(err)=>{statement})
 * fs.rename(filename,'new file name with dir address',(error)=>{statement})
 * buffer is a tempary memory to perform the task 
const path = require('path');
const fs = require('fs');
console.log(__dirname);
const filepath = path.join(__dirname,'file');
const file = `${filepath}/test.txt`;
fs.unlinkSync(`${filepath}/testrename.txt`);
fs.rename(`${file}`,`${filepath}/testrename.txt`,(err)=>{
    if(!err) console.log("file renamed");
});
fs.appendFile(`${file}`," new data afgter the append in the file.",(err)=>{
    if(!err) console.log("updated");
});
fs.writeFileSync(`${file}`,"hello from the node to the file");
fs.readFile(`${file}`,'utf8',(err,item)=>{
    console.log(item);
});//if we donot use the utf8 as a string parametre the data from the file will come in a buffer
fs.readdir(__dirname,(err,file)=>{
    file.forEach((item)=>{
        console.log(item);
    })
})*/

//global modeule which do not need to be imported
//core mode that are inbuild function or module
//const arr = [1,2,3,4,5,6];
// filter is use to perfome task in all the element of the array 
// to perform any filter in an array then use the filter function
/*arr.filter((item)=>{
    let value = item*item;
    console.log(value);
});*/
/**simple http server
 * http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify(data)+"hello from server");
    resp.end();
    //console.log("color code".red);
}).listen(4500);**/

//console.log("hello");
//npm init for creating package file
/** node js is a single theaded
 * npm install will instal all the depedency available in the package.json file
 * .gitignore file will ignor the folder that you dont want to puss
 * nodemon package will contineously run your node app when ever you made an edit in a node file
 * nodemon filename.js to run the node application
 * 
 * node is a asyncnous language as it does not wait for the other task to be completed.
 * process.argv to take input 0 and 1 index is reseved, while using file read function use from 2 index
 * synchrnous operation tasks are preformed one at a time wait for the first task to finish
 * Asynchrnous operation tasks do not wait to finish first task
 * setTimeout(()=>{statement},time); to give a pause
 * drawback of a asynchrnous programming language is that the data changed in the function 
 * taking time will not used in the data function for example: let a =1 let b=2
 * function add(){
 * return (a+b)*506879}    
 * console.log(a);
 * let consider that the function take more time to exectude then the console part then the console 
 * part will execute first then the function part will execute 
 * to handle this we use promise or sync await,call back function
 * to solve the problem that come with Asynchrnous operation is to make premises or a promise
 * to make a promise Promise((resolve,reject)=>{asynchrnous task})
 * to get the data from promise promise.then((data)=>{use data over here})
 * let a = 10;
 * let b = 20;
 * let waiting = new promise((resolve,reject)=>{
 * setTimeout(()=>{
 * resolve(30)//complex data that will be the output of the complex function
 * },2000)
 * })
 * waiting.then((data)=>{
 * console.log(a+data);
 * });
 * 
 * web status
 * 1xx Informational
100 Continue
101 Switching Protocols
102 Processing (WebDAV)
2xx Success
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status (WebDAV)
208 Already Reported (WebDAV)
226 IM Used
3xx Redirection
300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
306 (Unused)
307 Temporary Redirect
308 Permanent Redirect (experimental)
4xx Client Error
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Request Entity Too Large
414 Request-URI Too Long
415 Unsupported Media Type
416 Requested Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot (RFC 2324)
420 Enhance Your Calm (Twitter)
422 Unprocessable Entity (WebDAV)
423 Locked (WebDAV)
424 Failed Dependency (WebDAV)
425 Reserved for WebDAV
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
444 No Response (Nginx)
449 Retry With (Microsoft)
450 Blocked by Windows Parental Controls (Microsoft)
451 Unavailable For Legal Reasons
499 Client Closed Request (Nginx)
5xx Server Error
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates (Experimental)
507 Insufficient Storage (WebDAV)
508 Loop Detected (WebDAV)
509 Bandwidth Limit Exceeded (Apache)
510 Not Extended
511 Network Authentication Required
598 Network read timeout error
599 Network connect timeout error
*/