import { MOVIESLIST, MOREMOVIES_COMING } from '../actions/actionType'

const initState = {
  movieslist: null
}

const homeReducer = (state = initState, action) => {
  const newState = {
    ...state
  }
  switch (action.type) {
    case MOVIESLIST:
      console.log(action.payload)
      newState.movieslist = action.payload
      break
    case MOREMOVIES_COMING:
      action.payload.coming.map(item => {
        newState.movieslist.movieList.push(item)
      })
      console.log(action.payload)
      break
    default:
      break
  }

  return newState
}

export default homeReducer
