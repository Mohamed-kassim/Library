const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
//database connection 
mongoose.connect('mongodb://localhost/Library')
mongoose.Promise = global.Promise;
//middle wares
app.use(bodyParser.json());
app.use('/books',require('./routes/books') );

//connecting server
app.listen(process.env.port || 4000, function() {
    console.log('hey hey hey iam listening ')
})
