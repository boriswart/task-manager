import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { loadState } from "../Utils/LocalStorage.js"
import { listsService } from "../Services/ListsService.js"

//Private




//public
export class ListsController {
    constructor() {
        ProxyState.on("lists", this.drawLists)
        this.drawLists()
        loadState()
    }

    addList(event) {
        event.preventDefault()
        let form = event.target
        console.log("Adding a List", form.name.value)
        listsService.createList(form.name.value, form.color.value)
        form.reset
    }

    removeList(listId) {
        console.log("Removing the List", listId)
        let keeperLists = ProxyState.lists.filter(x => x.listId !== listId)
        ProxyState.lists = keeperLists
        ProxyState.lists = ProxyState.lists
        // TODO tremove  tasks with listID
    }


    drawLists() {
        console.log("Drawing the list")
        let template = ''

        ProxyState.lists.forEach(i => {
            template += /*html*/`
            <div class="card col-4 mt-4">
               <div class="card-body text-center">
                <h5 class="card-title">${i.name}</h5>
                <p class="card-text ">------------
                </p>
                    <div>
                    `
            ProxyState.tasks.forEach(t => {
                template += /*html*/`
                        ${t.listId == i.listId ? '<div class="d-flex sb align-items-center justify-content-around">' : ""}
                        ${t.listId == i.listId ? '<input type="checkbox" class="checkbox" id="donechk" autocomplete="off" onclick="app.TasksController.updateTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "','" + t.done + "'" + ')"' : ""}
                        ${t.listId != i.listId ? "" : t.done ? 'checked >' : '>'}
                        ${t.listId == i.listId ? '<label class="checkbox" for="donechk"></label>' : ""}
                        ${t.listId == i.listId ? t.name : ""}
                        ${t.listId == i.listId ? '<i class="fa fa-trash" aria-hidden="true" onclick="app.TasksController.removeTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "'" + ')"></i></div>' : ""}`
            })

            template += /*html*/`
                    </div >
                    <div class="d-flex" >
                        <form onsubmit="app.TasksController.addTask(event,'${i.listId}')">
                            <div class="d-flex sb">    
                                <input type="text" class="no-outline"  minlength="3" maxlength="50" size="10" id="newtask${i.listId}" name="name" required>
                                <label class="text " for="newtask"></label>
                                <button type="submit" class="btn btn-primary">+</button>
                                <i class="fa fa-trash" aria-hidden="true" onclick="app.ListsController.removeList('${i.listId}')"></i>
                            </div>
                        </form>
                    </div>
            </div >
        </div > `
        })
        document.getElementById("cards-go-here").innerHTML = template
    }


}