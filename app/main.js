import { TasksController } from "./Controllers/TasksController.js";
import { ListsController } from "./Controllers/ListsController.js";

class App {
  TasksController = new TasksController();
  ListsController = new ListsController();
}
debugger
window["app"] = new App();
