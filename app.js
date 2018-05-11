const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
app.use(bodyParser.json());
app.use('/books',require('./routes/books') );
app.listen(process.env.port || 4000, function() {
    console.log('hey hey hey iam listening ')
})
