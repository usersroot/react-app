import { observable, action } from 'mobx'

class Count {
  @observable
  count = 0

  @action
  addCount = () => {
    this.count++
  }
}

const count = new Count()

export default count
