const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const ToDoList = require('./models/ToDoList');
// db password = 442RXm249VzWh2Jb


const app = express();
app.use(cors(
    {
        origin:("https://jaa-e5cw.vercel.app"),
        methods:("POST","GET"),
        credentials: true
    }
))
app.use( express.json())

mongoose.connect('mongodb+srv://leojomar01:442RXm249VzWh2Jb@cluster0.kbueheb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("database connected")
})

app.post('/create',(req,res)=>{
    console.log(req.body.values)
    ToDoList.create(req.body.values)
    .then (todolist => res.json(todolist))
    .catch (err => res.json(err))
})
app.get('/getTodos',(req,res)=>{
    ToDoList.find({}).sort({status:1,deadline:1})
    .then (todos => {res.json(todos)})
    .catch (err => res.json(err))
})

app.put('/updateRecord/:id',(req,res)=>{
    const id = req.params.id
    ToDoList.findByIdAndUpdate({_id:id},{status:req.body.status})
    .then (todos => {res.json(todos)})
    .catch (err => res.json(err))
})

app.put('/deleteRecord/:id',(req,res)=>{
    const id = req.params.id
    ToDoList.findByIdAndDelete({_id:id})
    .then (todos => {res.json(todos)})
    .catch (err => res.json(err))
})



app.listen(5000, () =>{
    console.log('Server is Running!')

})
