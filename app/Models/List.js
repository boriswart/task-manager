export class List {
    constructor(name, tasks, listId) {

        this.name = name;
        this.done = tasks;
        this.listId = listId || ("list" + Math.floor(100 * Math.random()))

    }
}