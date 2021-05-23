import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { loadState } from "../Utils/LocalStorage.js";

//Private



//Public
export class TasksController {
    constructor() {
        ProxyState.on("tasks", this.drawTasks)
        this.drawTasks()
        loadState()
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
        let keeperTasks = ProxyState.tasks.filter(x => x.taskId !== taskId)
        ProxyState.tasks = keeperTasks
        ProxyState.lists = ProxyState.lists
    }

    updateTask(taskId, doneChk) {
        //let allOtherTasks = ProxyState.tasks.filter(x => x.taskId !== taskId)
        let foundTask = ProxyState.tasks.find(x => x.taskId == taskId)
        console.log("Updating the Tasks", taskId, doneChk, ProxyState.tasks)
        foundTask.done ? foundTask.done = false : foundTask.done = true //toggle every click
        console.log("Updated  Tasks", foundTask)
        ///ProxyState.lists = ProxyState.lists
    }
}