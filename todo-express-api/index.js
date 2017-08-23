const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoute = require('./routes/todo.route.js');

app.use(bodyParser.json());

app.use('/api/todos', todoRoute);

const port = 3000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})