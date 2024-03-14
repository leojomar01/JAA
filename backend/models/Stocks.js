const mongoose =require('mongoose');


const StockSchema = new mongoose.Schema({
    color:String,
    size: String,
    number:Number,
    comment:String
})

module.exports = mongoose.model('stocks',StockSchema)