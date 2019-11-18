import { COUNT_ADD } from '../actions/actionType'

const initState = {
  count: 0
}

const countReducer = (state = initState, action) => {
  const newState = {
    ...state
  }

  switch (action.type) {
    case COUNT_ADD:
      newState.count++
      break
    default:
      break
  }

  return newState
}

export default countReducer
