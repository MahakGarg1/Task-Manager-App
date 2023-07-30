const taskRoutes = require('express').Router();
const taskData = require('../task.json');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

taskRoutes.use(bodyParser.json());


taskRoutes.delete('/:id', (req, res) => {
  let taskDataModified = JSON.parse(JSON.stringify(taskData));
  let taskManager = taskDataModified.tasks;
  let taskIdPassed = req.params.id;
  let tasKToUpdateIndex = taskManager.findIndex(val => val.taskId == taskIdPassed);
  if (tasKToUpdateIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  taskDataModified.tasks.splice(tasKToUpdateIndex,1) ;
  try{
    let writePath = path.join(__dirname, '..', 'task.json');
    fs.writeFileSync(writePath, JSON.stringify(taskDataModified),{encoding: 'utf-8', flag: 'w'});
    return res.status(200).json({"message":"Task has been deleted successfully"});
  } catch(err){
    return res.status(500).json({"message":"write has failed, try back again later"});

  }
});

taskRoutes.post('/', (req, res) => {
  const taskDetails = req.body;
  let writePath = path.join(__dirname, '..', 'task.json');
  let taskDataModified = JSON.parse(JSON.stringify(taskData));
  taskDataModified.tasks.push(taskDetails);
  try{
    fs.writeFileSync(writePath, JSON.stringify(taskDataModified),{encoding: 'utf-8', flag: 'w'});
    return res.status(200).json({"message":"Task has been created successfully"});
  } catch(err){
    return res.status(500).json({"message":"write has failed, try back again later"});

  }
});

taskRoutes.put('/:id', (req, res) => {
  const taskDetails = req.body;
  let writePath = path.join(__dirname, '..', 'task.json');
  let taskDataModified = JSON.parse(JSON.stringify(taskData));
  let taskManager = taskDataModified.tasks;
  let taskIdPassed = req.params.id;
  let tasKToUpdateIndex = taskManager.findIndex(val => val.taskId == taskIdPassed);
  if (tasKToUpdateIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  taskDataModified.tasks[tasKToUpdateIndex] = { ...taskDataModified.tasks[tasKToUpdateIndex] , ...req.body };

  tasKToUpdate=req.body
  try{
    fs.writeFileSync(writePath, JSON.stringify(taskDataModified),{encoding: 'utf-8', flag: 'w'});
    return res.status(200).json({"message":"Task has been updated successfully"});
  } catch(err){
    return res.status(500).json({"message":"write has failed, try back again later"});

  }
});
taskRoutes.get('/', (req, res) => {
    return res.status(200).json(taskData);
  });

  
taskRoutes.get('/', (req, res) => {
  return res.status(200).json(taskData);
});


  taskRoutes.get('/:id', (req, res) => {
    let taskManager = taskData.tasks;
    let taskIdPassed = req.params.id;
    let result = taskManager.filter(val => val.taskId == taskIdPassed);
    console.log(result);
    if(result == null || result == undefined || result.length == 0){
        return res.status(404).json({"Message": "Task that you requested does not exist"});
    }
    return res.status(200).json(result);
  })
  module.exports = taskRoutes;