
//Constructor function
//How do I build this object?
var uuid = require("uuid");
function Todo(description){
  this.id = uuid.v4();
  this.description = description;
  this.isComplete = false;
}

Todo.prototype.updateComplete = function(value){
  this.isComplete = value;
};

//sand box below
// var todo1 = new Todo('read my book');
// var todo2 = new Todo('practice programming');
// var todo3 = new Todo('go running');
// console.log(todo1);
module.exports = Todo;
