import { ProxyState } from "../AppState.js"
// import { ListsService }
//Private




//public
export class ListsController {
    constructor() {
        ProxyState.on("lists", this.drawLists)
        this.drawLists()
    }

    addList() {
        console.log("Added a Task List");
    }



    drawLists() {
        console.log("Drawing the list")
        let template = ''

        ProxyState.lists.forEach(i => {
            template += /*html*/`
            <div class="card col-4 my-4">
               <div class="card-body text-center">
                <h5 class="card-title">${i.name}</h5>
                <p class="card-text">------------
                </p>
                    <div>
                     `
            ProxyState.tasks.forEach(t => {
                template += /*html*/`
                            ${t.listId == i.listId ? '<div class="d-flex sb"><ul><li>' + t.name + '</li></ul>' : ""}
                            ${t.listId == i.listId ? '<i class="fa fa-recycle" aria-hidden="true" onclick="app.TasksController.removeTask(' : ""}
                            ${t.listId == i.listId ? "'" + t.taskId + "'" + ')"></i></div>' : ""}`
            })

            template += /*html*/`
                    </div >
                <div class="d-flex" >
                    <form onsubmit="app.TasksController.addTask(event,'${i.listId}')">
                        <input type="text" class="no-outline" id="newtask" name="name" required>
                            <label class="text " for="newtask"></label>
                            <button type="submit" class="btn btn-primary">+</button>
                        </form>
                    </div>
                </div >
            </div > `
        })
        document.getElementById("cards-go-here").innerHTML = template
    }







}