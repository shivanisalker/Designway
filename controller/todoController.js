var toDoList=require('../toDoList.json');
const fs = require('fs');
var dateFormat = require("dateformat");

//ADD ITEMS TO TODO LIST
exports.addToDo=async(req,res,next)=>{
  try{
    var todo=req.body.todo;
    toDoList.to_do_list.push(todo); 
    fs.writeFile("toDoList.json",JSON.stringify(toDoList), function (err, data) {
      if (err){
        res.status(401).send({ status: true, message: "No item added." });
      } else {
        res.status(204).send();
      }
    });
  }
      
  catch(e){
     	console.log(e);
    	res.status(500).send('Something went wrong!');
  }
}

//GET ALL TODO LIST ITEM
exports.allToDo=async(req,res,next)=>{
  try{
    fs.readFile("toDoList.json",(err, data) => {
      if (err) throw err;
      let todolist = JSON.parse(data);
      todolist=todolist.to_do_list;
      console.log(todolist);
      res.status(201).send({ status: true, message: "success!", data: todolist })
  });
  } 
  catch(e){
     	console.log(e);
    	res.status(500).send('Something went wrong!');
  }
}

//DELETE TODO LIST ITEM
exports.deleteToDo=async(req,res,next)=>{
  try{
    var todoid=req.params.id;
    delete toDoList.to_do_list[todoid]; 
    fs.writeFile("toDoList.json",JSON.stringify(toDoList), function (err, data) {
      if (err){
        res.status(401).send({ status: true, message: "No item deleted." });
      } else {
        res.status(204).send();
      }
    });
  }    
  catch(e){
     	console.log(e);
    	res.status(500).send('Something went wrong!');
  }
}

//UPDATE TODO LIST ITEM
exports.updateToDo=async(req,res,next)=>{
  try{
    var todoid=req.params.id;
    toDoList.to_do_list[todoid]="new text"; 
    fs.writeFile("toDoList.json",JSON.stringify(toDoList), function (err, data) {
      if (err){
        res.status(401).send({ status: true, message: "No item updated." });
      } else {
        res.status(204).send();
      }
    });
  }    
  catch(e){
     	console.log(e);
    	res.status(500).send('Something went wrong!');
  }
}

//copy of same json file
exports.copyToDoList=async(req,res,next)=>{
 
  try{
    // var updatedAt = new Date();
    fs.readFile("toDoList.json",(err, data) => {
      if (err) throw err;
      let todolist = JSON.parse(data);
      updatedAt=new Date();
      todolist.updatedAt=dateFormat(updatedAt,'dd mmm yyyy "at" h:MM TT');
       data = JSON.stringify(todolist);
     
      fs.writeFileSync('_yourjsonfilename.json',data );
      res.status(204).send();
  });
  } 
  catch(e){
     	console.log(e);
    	res.status(500).send('Something went wrong!');
  }
}