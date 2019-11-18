import { observable, action } from 'mobx'

class Todos {
  @observable
  todoslist = [
    {
      id: 1,
      task: '今天7点起床'
    }
  ]
  @action
  addTodos = val => {
    this.todoslist.push({
      id: this.todoslist.length + 1,
      task: val
    })
  }
}
let todos = new Todos()

export default todos
