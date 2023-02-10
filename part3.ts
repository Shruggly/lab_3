interface ToDoInterface {
    Tasks:string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class ToDo implements ToDoInterface {

    constructor(){}

    Tasks:string[] = [];
    
    addTask(task:string):number {
        this.Tasks.push(task);
        console.log("Task"+task+" add to the list");
        return this.Tasks.length;
    }
    
    listAllTasks():void {
        this.Tasks.forEach((item) => {
            console.log(item);
        })
    }
    
    deleteTask(task:string):number {
        let index:number = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index,1);
            console.log("Task | "+task+" | deleted from list.");
        } else {
            console.log("Task | "+task+" | not found in list");
        }
        return this.Tasks.length;
    }
}

let myToDos = new ToDo();

myToDos.addTask("Eat");
myToDos.addTask("Work");
myToDos.addTask("Sleep");

myToDos.listAllTasks();

myToDos.deleteTask("Sleep");

myToDos.listAllTasks();