const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Product Document Structure
const borrowtSchema = new Schema({
    // Id Create Auto
    books:[{
        book:[{
            _id:String,
            book_name: String,
            anther: String,
            publisher: String,
            price:int,
        }],
    }],
    member: [{
        _id:String,
        name_lastname: String,
        address: String,
        tel: String,
        category:[{
            _id: int,
            category_name: String,
            borow_of_day: Date /*ใส่ไปก่อน*/ 
        }]
    }],
    borrow_date: Date,
    lender_id:[{
        _id:String,
        name: String,
    }],
    return_date: Date,
    reviever_id:[{
        _id:String,
        name: String,
    }],
},
{ 
    timestamps: true        // for storing time/date of creation
});