var ToDo = /** @class */ (function () {
    function ToDo() {
        this.Tasks = [];
    }
    ToDo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task" + task + " add to the list");
        return this.Tasks.length;
    };
    ToDo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task | " + task + " | deleted from list.");
        }
        else {
            console.log("Task | " + task + " | not found in list");
        }
        return this.Tasks.length;
    };
    return ToDo;
}());
var myToDos = new ToDo();
myToDos.addTask("Eat");
myToDos.addTask("Work");
myToDos.addTask("Sleep");
myToDos.listAllTasks();
myToDos.deleteTask("Sleep");
myToDos.listAllTasks();
