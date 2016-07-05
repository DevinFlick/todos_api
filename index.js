var express = require("express");
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

//db Initialization
db.defaults({todos: []})
.value(); // runs the previous set of commands

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// server.get('/todos', function(request, response){
//   response.send('GET todos');
// });

server.get('/todos/:id', function(request, response){
  var todo = db.get('todos')
                .find({id: request.params.id})
                .value();
  response.send(todo);
});

server.get('/todos/', function(request, response){
  var todos = db.get('todos')
  .value();
  response.send(todos);
});

server.post('/todos/', function(request, response){
  // use line below to check in postman
  //response.send('POST todos');
  var todo = {
  //we need to have a randomly generated id so discard the code line below
  //  id: '5',
  id: uuid.v4(),
    //description: 'buy groceries', changing to have userinput
    description: request.body.description,
    isComplete: false
  };

  var result = db.get('todos')
                  .push(todo)
                  .last()
                  .value();
  response.send(result);
});

server.put('/todos/:id', function(request, response){
  var updatedTodoInto = {
    description: request.body.description,
    isComplete: request.body.isComplete
  };
  var updatedTodo = db.get ('todos')
                      .find({id: request.params.id})
                      .assign(updatedTodoInfo)
                      .value();
  response.send(updatedTodo);
});

server.delete('/todos/:id', function(request, response){
  var todo = db.get('todos')
                remove({id:request.params.id})
                .value();
  response. send(todo);
});

server.listen(port, function(){
  console.log("now listening")
});
