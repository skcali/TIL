const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const mongoUrl = 'mongodb://localhost:27017/todoItems';

router
    .get('/', getAllTodoItems)
    .get('/:id', getTodoItemById)
    .post('/', createTodoItem)
    .put('/:id', updateTodoItem)
    .delete('/:id', deleteTodoItem);

module.exports = router;

function getAllTodoItems(req, res) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.error(err);
            return;
        }

        db.collection('todoItems').find({}).toArray(function(err, todoItems) {
            if(err) {
                console.error(err);
                return;
            }

            res.json(todoItems);
            db.close();
        })
    });
}

function getTodoItemById(req, res) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.error(err);
            return;
        }

        db.collection('todoItems').findOne({ _id: new ObjectId(req.params.id) }, function(err, todoItem) {
            if(err) {
                console.error(err);
                return;
            }

            res.json(todoItem);
            db.close();
        })
    });
}

function createTodoItem(req, res) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.error(err);
            return;
        }

        db.collection('todoItems').insert({text: req.body.text, priority: req.body.priority}, function(err, data) {
            if (err) {
                console.error(err);
                return;
            }
            res.json('Success!');
            db.close();
        });
    });
}

function updateTodoItem(req, res) {
   MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.error(err);
            return;
        }

        db.collection('todoItems').update({ _id: new ObjectId(req.params.id) }, req.body, function() {
            res.json('Update Success!');
        })
        db.close();
    }); 
}

function deleteTodoItem(req, res) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
            console.error(err);
            return;
        }

        db.collection('todoItems').deleteOne({ _id: new ObjectId(req.params.id) }, function() {
            res.json('Delete Success!');
        })
        db.close();
    }); 
}