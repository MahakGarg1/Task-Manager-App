const express = require('express');
const bodyParser = require('body-parser');
const routes = require('express').Router();
const taskInfo = require('./routes/taskInfo');

const app = express();
app.use(bodyParser.json());
app.use(routes);


const PORT = 3014;

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to the task manager app");
  });

  routes.use('/tasks', taskInfo);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is started succesfully");
    else
        console.log("Error occurred");
    }
);