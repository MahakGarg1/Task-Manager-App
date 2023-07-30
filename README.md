# Task-Manager-App
Objective: Build a RESTful API for a simple task manager application.

Implement a RESTful API with the following endpoints:
1) GET /tasks: Retrieve all tasks.
2) GET /tasks/:Id: Retrieve a single task by its ID.
3) POST /tasks: Create a new task.
4) PUT /tasks/:Id: Update an existing task by its ID.
5) DELETE /tasks/:Id: Delete a task by its ID.

Commands to be run: 
i)  Installing the packages - npm install.

ii) Starting the server - nodemon index.js.

iii) curl to get the task info Method: GET
   curl - http://localhost:3001/tasks/:id

iv)  curl to modify the task Method : POST
curl - localhost:3008/tasks/:id

v) curl to update the task Method : PUT
curl - 'localhost:3008/tasks/3'
