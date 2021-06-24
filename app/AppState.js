import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"


import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  tasks = [new Task("Clean Room", false, "lst1", "tsk1")]

  /** @type {List[]} */
  lists = [new List("Gonna do it", '#f03003' , "lst1")]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
