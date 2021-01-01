var express = require('express');
var cors = require('cors');
const fs = require('fs');

var pjson = require('./package.json');
var dateFormat = require("dateformat");

var app = express();

const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on port ${port}...`));

var createdDate = new Date();

let toDoList = { 
    author:"Shivaani",
    version:pjson.version, 
    time_stamp: dateFormat(createdDate,'dd mmm yyyy "at" h:MM TT'),
    to_do_list: []
};
 
let data = JSON.stringify(toDoList);
fs.writeFileSync('toDoList.json', data);

app.use(cors());

app.use(express.json());

var todoRouter = require('./routes/todoRoute');
app.use('/api',todoRouter);

module.exports = app;