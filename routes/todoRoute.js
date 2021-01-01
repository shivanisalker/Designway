var express = require('express');
var router = express.Router();
const todoController = require('../controller/todoController');

//ROUTE FOR SORTING THE JSON STRUCTURE BY AGE IN ASCENDING ORDER
router.post('/addToDo', function(req, res, next) {
  todoController.addToDo(req, res);
});

router.get('/allToDo', function(req, res, next) {
  todoController.allToDo(req, res);
});

router.delete('/deleteToDo/:id', function(req, res, next) {
  todoController.deleteToDo(req, res);
});

router.put('/updateToDo/:id', function(req, res, next) {
  todoController.updateToDo(req, res);
});

router.post('/copyToDoList', function(req, res, next) {
  todoController.copyToDoList(req, res);
});


module.exports = router;