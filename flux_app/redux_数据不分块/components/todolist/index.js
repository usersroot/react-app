import React from 'react'
import store from '../../store'
import { addTodos } from '../../actions/index'

export default class Todolist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: store.getState().todos
    }
  }
  renderList() {
    return this.state.todos.map(item => <li key={item.id}> {item.task} </li>)
  }

  //redux 中的事件订阅 通过store.subscribe()
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todos: store.getState().todos
      })
    })
  }

  addList = e => {
    console.log('e.keycode', e.keyCode)
    if (e.keyCode === 13) {
      addTodos(e.target.value)
      console.log('hahah')
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.addList} />
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}
