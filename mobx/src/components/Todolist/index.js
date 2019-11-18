import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('store')
@observer
class Todolist extends Component {
  renderList = () => {
    return this.props.store.todos.todoslist.map(item => (
      <li key={item.id}>{item.task}</li>
    ))
  }
  add = e => {
    if (e.keyCode === 13) {
      this.props.store.todos.addTodos(e.target.value)
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.add} />
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default Todolist
