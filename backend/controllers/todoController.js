const Todos = require("../models/todoModel");

module.exports.getTodos = async(req,res,next)=>{
    try{
        const todos = await Todos.find({})
        console.log(todos)
        return res.json(todos);
    }catch(ex){
        next(ex)
    }
};
