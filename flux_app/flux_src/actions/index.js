import { PLUS_COUNT } from './actionTypes'
import dispatcher from '../dispatcher/index'

//创建动作
export const plusCount = () => {
  const action = {
    type: PLUS_COUNT
  }

  dispatcher.dispatch(action)
}
