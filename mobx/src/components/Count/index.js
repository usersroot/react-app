import React from 'react'
import { inject, observer } from 'mobx-react'
@inject('store')
@observer
class Count extends React.Component {
  render() {
    const { count, addCount } = this.props.store.count
    return (
      <div>
        <button onClick={addCount}>+++</button>
        <p>count的值是：{count}</p>
      </div>
    )
  }
}

export default Count
