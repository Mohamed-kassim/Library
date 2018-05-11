var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // id : {
    //     type : Number,
    //     required :[true, "no id no book"]
    // },
    name : {
        type : String,
        required : [true, 'Name field is required']
    },
    author : {
        type : String,
        required : [true, 'author field is required']
    },
    borrower : {
        type : String , 
    },
    available : {
        type : Boolean , 
        default : false,
        required : [true, 'author field is required']
    }
});
const Books = mongoose.model('books', bookSchema);
module.exports = Books;