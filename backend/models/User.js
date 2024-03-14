const mongoose =require('mongoose');


const UserSchema = new mongoose.Schema({
    user:String,
    password: String
})

module.exports = mongoose.model('users',UserSchema)