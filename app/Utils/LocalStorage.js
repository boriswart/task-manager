import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('TaskManager', JSON.stringify(
        {
            lists: ProxyState.lists,
            tasks: ProxyState.tasks
        }
    ))
    console.log('saved ', ProxyState)
}

export function loadState() {

    let data = JSON.parse(localStorage.getItem('TaskManager'))
    if (data) {
        for (let l = 0; l < data.lists.length; l++) {
            ProxyState.lists.push(new List(data.lists[l].name, data.lists[l].color, data.lists[l].listId))
        }
        for (let t = 0; t < data.tasks.length; t++) {
            ProxyState.tasks.push(new Task(data.tasks[t].name, data.tasks[t].done, data.tasks[t].listId, data.tasks[t].taskId))
        }
    }

}