import React from 'react'
import { connect } from 'react-redux'
import { addCount } from '../actions/index'
import { bindActionCreators } from 'redux'

class Count extends React.Component {
  render() {
    let { count, addCount } = this.props
    return (
      <div>
        <button onClick={addCount}>+1</button>
        <p>count的值是：{count}</p>
      </div>
    )
  }
}

const mapStateFromProps = state => {
  return {
    count: state.countReducer.count
  }
}

const mapDispatchFromProps = dispatch => {
  return bindActionCreators({ addCount }, dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Count)
