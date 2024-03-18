const mongoose =require('mongoose');


const ToDoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc: String,
    deadline:String,
    status:String,
    rush:String,
    time:String
})

module.exports = mongoose.model('Todos',ToDoSchema)