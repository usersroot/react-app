const events = require('events') //node 中的内置模块  用于事件的订阅发布

const store = {
  ...events.EventEmitter.prototype,
  state: {
    count: 0
  },
  getState() {
    //用于获取数据   返回这个state对象
    return this.state
  }
}

export default store
