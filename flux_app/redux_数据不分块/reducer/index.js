import { TODOLIST } from '../actions/actionType'

const initState = {
  todos: [
    {
      id: 1,
      task: '任务一'
    },
    {
      id: 2,
      task: '任务er'
    },
    {
      id: 3,
      task: '任务shang'
    },
    {
      id: 4,
      task: '任务shi'
    },
    {
      id: 5,
      task: '任务wu'
    }
  ]
}

const reducer = (state = initState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case TODOLIST:
      newState.todos.push({
        id: newState.todos.length + 1,
        task: action.payload
      })
      break
    default:
      break
  }

  return newState
}

export default reducer
