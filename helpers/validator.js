class validator {
  static validateTaskInfo(taksInfo, taskData) {
    if(taksInfo.hasOwnProperty("taskId") &&
    taksInfo.hasOwnProperty("title") &&
    taksInfo.hasOwnProperty("date") &&
    taksInfo.hasOwnProperty("due date") &&  taksInfo.hasOwnProperty("priority")) {
      let valueFound = taskData.tasks.some(el => e1.taskId === taskInfo.taskId);
     
        if(!this.valueFound){
          return {
              "status": false,
              "message": "Task id has to be unique"
            }
        }else{
        return {
          "status": true,
          "message": "Task Info is unique"
        }}
      
      }
  else{
    return{
      "message": "error"

    }
   }

  }
}
     
        module.exports = validator;