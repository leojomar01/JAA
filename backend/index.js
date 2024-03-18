const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const todoRoutes = require('./routes/todoRoutes');



const app = express();
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST","GET"],
        credentials: true
    }
))
app.use( express.json())



app.use("/",todoRoutes)


// mongoose.connect('mongodb+srv://leojomar01:442RXm249VzWh2Jb@cluster0.kbueheb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb://localhost:27017/JAA')
.then(()=>{
    console.log("DB connected")
})



app.listen(3001, () =>{
    console.log('Server is Running!')

})
