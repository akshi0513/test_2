const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port= 9000;
const mongourl= "mongodb+srv://akshitha99:aksh99@cluster0.2wcrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl,{});
mongoose.connection.on('connected' ,() => {
    console.log("connected to mongoDB sucessfully");
})

const Routes = require('./route/todoRoute');
app.use('/api/todo', Routes);
app.listen(port, () =>{
    console.log('server has started on the port' + port);
})
