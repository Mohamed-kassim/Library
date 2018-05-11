const express = require('express');
const Book = require('../models/books');
const router = express.Router();


router.get('/', function (req, res) {  
    res.send(
        {
        type:'GET',
        function : 'get the library books'
    });
});

router.post('/:id', function (req, res) {  
    // var book = new Book(req.body);
    // Book.save();
    id = [{id : req.query.id}];
    body = req.body;
    book = id.concat(body);
    console.log (book);
    Book.create(req.body);
    res.send(
        {
        type:'POST',
        function : 'add book to the library books',
        body : req.body
    });
});

router.put('/:id', function (req, res) {  
    res.send(
        {
        type:'PUT',
        function : 'edit book with id ',
        body : req.body
    });
});


router.delete('/:id', function (req, res) {  
    res.send(
        {
        type:'DELETE',
        function : 'delete book ',
        body : req.body
    });
});

module.exports = router;


