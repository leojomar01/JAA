const mongoose =require('mongoose');


const ToDoSchema = new mongoose.Schema({
    title:String,
    desc: String,
    deadline:String,
    status:String,
    rush:String,
    time:String
})

module.exports = mongoose.model('todos',ToDoSchema)