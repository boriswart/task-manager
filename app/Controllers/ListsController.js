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
                            ${t.listId == i.listId ? '<!--Crazy Hard! -->' : ""}
                            ${t.listId == i.listId ? '<div class="d-flex sb align-items-center">' : ""}

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