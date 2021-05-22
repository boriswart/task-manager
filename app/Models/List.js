export class List {
    constructor(name, tasks, listId) {

        this.name = name;
        this.done = tasks;
        this.listId = listId || ("lst" + Math.floor(10000 * Math.random()))

    }
}