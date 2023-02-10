var Tasks = [];
var i;
function addTask(task) {
    Tasks.push(task);
    console.log("Task added to list \n" + Tasks.length + " number of tasks");
}
function listAllTasks() {
    for (i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i]);
    }
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("Task | " + task + " | deleted from list.");
    }
    else {
        console.log("Task | " + task + " | not found in list");
    }
    return Tasks.length;
}
/*
function deleteTask(task:string) {
    delete Tasks[Tasks.indexOf(task)];

    console.log("Task deleted from list "+Tasks.length+" number of tasks");
}
*/
/*
function deleteTask(task:string) {

    for(i = 0; i < Tasks.length; i++) {}

        if (task === Tasks[i]) {
            delete Tasks[i];
     }
}*/
addTask("do x");
addTask("do y");
addTask("do z");
listAllTasks();
deleteTask("do x");
listAllTasks();
