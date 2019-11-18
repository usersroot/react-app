import { PLUS_COUNT } from '../actions/actionTypes'
import { Dispatcher } from 'flux'
import store from '../store'

const dispatcher = new Dispatcher()

dispatcher.register(action => {
  switch (action.type) {
    case PLUS_COUNT:
      store.state.count++
      console.log(store.state.count)
      break
    default:
      break
  }
})

export default dispatcher
