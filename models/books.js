var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name : {
        type : string,
        required : [true, 'Name field is required']
    },
    author : {
        type : string,
        required : [true, 'author field is required']
    },
    borrower : {
        type : string , 
    },
    availabe : {
        type : string , 
        required : [true, 'author field is required']
    }
});
const Books = mongoose.model('books', bookSchema);
model.exports = Books;