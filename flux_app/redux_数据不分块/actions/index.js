import { TODOLIST } from './actionType'
import store from '../store/index'

export const addTodos = val => {
  const action = {
    type: TODOLIST,
    payload: val
  }

  store.dispatch(action)
}
