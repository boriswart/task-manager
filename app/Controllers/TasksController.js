import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
//import { TasksService } from "../Services/TasksService.js"

//Private



//Public
export class TasksController {
    constructor() {
        ProxyState.on("tasks", this.drawTasks)
        this.drawTasks()
    }

    addTask(event, listId) {
        event.preventDefault()
        let form = event.target
        console.log("Adding a Task", form.name.value, listId)
        let newTask = new Task(form.name.value, false, listId)
        ProxyState.tasks.push(newTask)
        ProxyState.lists = ProxyState.lists
        form.reset

    }

    drawTasks() {
        console.log("Drawing the Tasks")
    }

    removeTask(taskId) {
        console.log("Removing the Tasks", taskId)
    }

}