
/**
 * Adds, deletes and edit tasks
 */
class TaskManager{
    constructor(){
        this.taskList = [];
        this.taskId = 0;
    }

    addTask(){
        let task = new Task(this.taskId, "My Task " + this.taskId, Statuses.ToDo);
        this.taskId++;

        this.taskList.push(task);
        this._addTaskToTable(task);
    }

    removeTask(taskId){
        let position = 0;
        let counter = 0;

        while(counter < this.taskList.length){
            let candidate = this.taskList[counter];
            if(candidate.getId === taskId) break;
            position++;
            counter++;
        }

        let task = this.taskList[position];
        this._removeTaskFromTable(task);
        this.taskList.splice(position, 1);
    }

    editTask(taskId){
        let row = document.getElementById("rowId_" + taskId);

        let name = document.getElementById("task_name_" + taskId);
        name.contentEditable = true;
    }

    _addTaskToTable(task){
        let table = document.getElementById("taskTable"); 
        let row = table.insertRow(this.taskList.length);
        row.id = "rowId_" + task.getId;

        let cells = [];
        const CELL_COUNT = 5;

        for(let i = 0; i < CELL_COUNT; i++){
            cells.push(row.insertCell(i));
        }

        cells[0].innerHTML = task.getId;

        let displayedTaskName = document.createElement("div");
        displayedTaskName.innerHTML = task.getTaskName;
        cells[1].append(displayedTaskName);
        cells[1].id = "task_name_" + task.getId;

        let statusButton = document.createElement("button");
        statusButton.classList.add("statusButton");
        statusButton.innerHTML = task.getStatus;
        cells[2].append(statusButton);

        let editButtonInstance = new EditButton(task.getId).create(EditMode.Edit);
        cells[3].append(editButtonInstance);

        let removeButtonInstance = new EditButton(task.getId).create(EditMode.Remove);
        cells[4].append(removeButtonInstance);
    }

    _removeTaskFromTable(task){
        let rowId = task.getId;

        let row = document.getElementById("rowId_" + rowId);
        row.parentNode.removeChild(row);
    }
}


class Task{
    constructor(id, taskName, status){
        this.id = id;
        this.taskName = taskName;
        this.status = status;
    }

    get getId(){return this.id;}
    get getTaskName(){return this.taskName;}
    get getStatus(){return this.status;}

    set setTaskName(taskName){this.taskName = taskName;}
    set setStatus(status){this.status = status;}
}

/**
 * Creates the Button within the cells to edit or delete a task
 */
class EditButton{
    constructor(id){
        this.id = id;
    }

    create(editMode){
        //creates button with a class
        let button = document.createElement("button");
        button.classList.add("editButton");
        let taskId = this.id;

        //adds the event which fires when the button is clicked
        button.addEventListener("click", function(){
            if(editMode === EditMode.Remove) taskManager.removeTask(taskId);
            else if(editMode === EditMode.Edit) taskManager.editTask(taskId);
        })

        //gives the button the specific label
        if(editMode === EditMode.Edit) button.innerHTML = "EDIT";
        else if(editMode === EditMode.Remove) button.innerHTML = "DELETE";
        else button.innerHTML = "SAVE";

        return button;
    }
}

const Statuses = {
    ToDo: "ToDo",
    Finished: "Finished",
    InWork: "InWork"
}

const EditMode = {
    Edit: 1,
    Remove: 2,
    Save: 3
}

//creates an instance of the manager at the beginning of the program
var taskManager = new TaskManager();

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("myButton").addEventListener("click", function(){
        taskManager.addTask();    
    });
})