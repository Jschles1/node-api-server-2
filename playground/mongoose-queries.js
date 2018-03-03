const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5a976ba28c4357c10f28a78f';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

const userId = '5a94c47a4ab4adcb0ff73050';

if (!ObjectID.isValid(userId)) {
  console.log('User ID not valid.');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User ID not found.');
  }
  console.log('User By ID: ', user);
}).catch((e) => console.log(e));
