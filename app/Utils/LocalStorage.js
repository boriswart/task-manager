import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function loadState() {

    let listAlreadyExist
    let taskAlreadyExist
    let data = JSON.parse(localStorage.getItem('TaskManager'))
    if (data) {

        for (let l = 0; l < data.lists.length; l++) {
            listAlreadyExist = ProxyState.lists.find(x => x.listId == data.lists[l].listId)
            if (!listAlreadyExist) {
                ProxyState.lists.push(new List(data.lists[l].name, data.lists[l].color, data.lists[l].listId))
            }
        }
        for (let t = 0; t < data.tasks.length; t++) {
            taskAlreadyExist = ProxyState.tasks.find(x => x.taskId == data.tasks[t].taskId)
            if (!taskAlreadyExist) (
                ProxyState.tasks.push(new Task(data.tasks[t].name, data.tasks[t].done, data.tasks[t].listId, data.tasks[t].taskId))
            )
        }
    }
}
export function saveState() {
    localStorage.setItem('TaskManager', JSON.stringify(
        {
            lists: ProxyState.lists,
            tasks: ProxyState.tasks
        }
    ))
    console.log('saved ', ProxyState)
}
