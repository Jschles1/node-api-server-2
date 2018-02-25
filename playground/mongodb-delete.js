const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Stf' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ name: 'Jim' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne 
  // db.collection('Todos').deleteOne({ text: 'Stf' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a91fbfc5cab491f38c0cad5')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});