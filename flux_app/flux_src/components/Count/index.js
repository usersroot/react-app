import React from 'react'
import store from '../../store/index'
import { plusCount } from '../../actions/index'

export default class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: store.getState().count
    }
  }

  add = () => {
    plusCount()
    store.emit('pluscounth')
  }
  componentDidMount() {
    store.on('pluscounth', () => {
      this.setState({
        count: store.getState().count
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>+1</button>
        <p>count的值是：{this.state.count}</p>
      </div>
    )
  }
}
