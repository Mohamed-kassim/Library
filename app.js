const express = require('express');
const app = express();
app.listen(process.env.port || 4000, function() {
    console.log('hey hey hey iam listening ')
})
app.all('/', function(req, res, next) {
    console.log('look look the request is coming! ')
    next();
})
app.get('/', function(req, res) {
    res.send('git request is here ')
        //res.end()
        //res.send({name : 'bahr'})
})
app.post('/', function(req, res) {
    res.send('post request is here ')
})
app.put('/', function(req, res) {
    res.send('put request is here ')
})