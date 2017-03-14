cracApp.factory('TaskDataService', ["$http","$rootScope", function($http,$rootScope){

    var srv = {};

    // URL to REST-Service
    srv._baseURL = "https://core.crac.at/crac-core/";

    // Get all task
    srv.getAllParentTasks = function(){
      return $http.get(srv._baseURL + "task/parents");
    }
    //Get a TAsk by ID
    srv.getTaskById = function(id){
      return $http.get(srv._baseURL + "task/" + id);
    }
    //Update the Task data if there are changes
    srv.updateTaskById = function(taskData, id){
     return $http.put(srv._baseURL + "task/" + id, taskData);
    }
    //Adds target task to the open-tasks of the logged-in user or changes it's state; Choose either 'participate', 'follow', or 'lead'
    srv.changeTaskPartState = function(id, stateName){
       return $http.get(srv._baseURL + "user/task/" + id + "/" + stateName);
    }
    //Returns all tasks of logged in user, divided in the TaskParticipationTypes
    srv.getMyTasks = function(){
     return $http.get(srv._baseURL + "user/task");
    }
    //Creates a new task
    srv.createNewTask= function(taskData){
      return $http.post(srv._baseURL + "admin/task", taskData);
    }
    //Removes the task with given id from the open-tasks of the currently logged in user
    srv.removeOpenTask= function(id){
      return $http.get(srv._baseURL + "user/task/" + id + "/remove");
    }
    //Returns target task and its relationship to the logged in user
    srv.getTaskRelatById = function(id){
      return $http.get(srv._baseURL + "user/task/" + id);
    }
    //Returns a sorted list of elements with the best fitting tasks for the logged in user
    srv.getMatchingTasks = function(number){
      if(number) return $http.get(srv._baseURL + "user/findMatchingTasks/" + number);
      else return $http.get(srv._baseURL + "user/findMatchingTasks");
    }
    //Sets a single task ready to be published, only works if it's children are ready
    srv.setReadyToPublishS = function(taskId){
      return $http.get(srv._baseURL + "task/" + taskId + "/publish/ready/single");
    }
    //Sets target task and all children ready to be published
    srv.setReadyToPublishT = function(taskId){
     return $http.get(srv._baseURL + "task/" + taskId + "/publish/ready/tree");
    }
    //Sets the relation between the logged in user and target task to done, meaning the user completed the task
    srv.setTaskDone = function(taskId, done_boolean){
      return $http.get(srv._baseURL + "task/" + taskId + "/done/" + done_boolean);
    }
    /*
     **Change the state of target task; Choose either 'publish', 'start', or 'complete'**
     *For each state different prerequisite have to be fullfilled:*
     *NOT_PUBLISHED: Default state*
     *PUBLISHED: Only allowed when the task-fields are all filled*
     *STARTED: Only allowed when the parent task is started and if sequential, the previous task is completed*
     *COMPLETED: A task can only be completed when its children are all completed or if it has none*
     */
    srv.changeTaskState = function(taskId, state_name){
     return $http.get(srv._baseURL + "task/" + taskId + "/state/" + state_name);
    }
    //Deletes the task with given id
    srv.deleteTaskById = function(taskId){
      return $http.delete(srv._baseURL + "admin/task/" + taskId);
    }
    //Creates a task, that is set as the child of the chosen existing task
    srv.createNewSubTask= function(taskData, taskId){
      return $http.post(srv._baseURL + "task/" + taskId + "/extend", taskData);
    }
    //Adds target competence to target task, it is mandatory to add the proficiency and importanceLvl
    srv.addCompetenceToTask = function(taskId,competenceId,proficiency,importance,mandatory){
      return $http.get(srv._baseURL + "task/" + taskId + "/competence/" + competenceId + "/require/" + proficiency + "/" + importance+ "/" + mandatory);
    }
    //Get all Competences which are not added to that specific task
    srv.getAllAvailableCompetences = function(taskId){
     return $http.get(srv._baseURL + 'task/' + taskId + '/competence/available');
    }

    /**
     * EXPOSE Service Methods
     **/
    return {
      getAllParentTasks : function(){
        return srv.getAllParentTasks();
      },
      getTaskById : function(id){
        return srv.getTaskById(id);
      },
      updateTaskById : function(taskData, id){
        return srv.updateTaskById(taskData, id);
      },
      changeTaskPartState : function(id, stateName){
        return srv.changeTaskPartState(id, stateName);
      },
      getMyTasks : function(){
        return srv.getMyTasks();
      },
      createNewTask : function(taskData){
        return srv.createNewTask(taskData);
      },
      removeOpenTask : function(id){
        return srv.removeOpenTask(id);
      },
      getTaskRelatById : function(id){
        return srv.getTaskRelatById(id);
      },
      getMatchingTasks : function(number) {
        return srv.getMatchingTasks(number);
      },
      setReadyToPublishS : function(taskId) {
        return srv.setReadyToPublishS(taskId);
      },
      setReadyToPublishT : function(taskId) {
        return srv.setReadyToPublishT(taskId);
      },
      setTaskDone : function(taskId, done_boolean) {
        return srv.setTaskDone(taskId, done_boolean);
      },
      changeTaskState : function(taskId, state_name) {
        return srv.changeTaskState(taskId, state_name);
      },
      deleteTaskById : function(taskId){
        return srv.deleteTaskById(taskId);
      },
      createNewSubTask : function(taskData, taskId){
        return srv.createNewSubTask(taskData, taskId);
      },
      addCompetenceToTask : function(taskId,competenceId,proficiency,importance, mandatory){
        return srv.addCompetenceToTask(taskId,competenceId,proficiency,importance, mandatory);
      },
      getAllAvailableCompetences : function(taskId){
        return srv.getAllAvailableCompetences(taskId);
      }
    }


  }])
