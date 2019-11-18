import { MOVIESLIST, MOREMOVIES_COMING } from './actionType'
import request from '../utils/request'

export const getMovies = () => {
  return async dispatch => {
    const result = await request({
      url: '/ajax/movieOnInfoList',
      params: {
        token: ''
      }
    })
    dispatch({
      type: MOVIESLIST,
      payload: result.data
    })
  }
}
export const getMoreMovies = movieIds => {
  return async dispatch => {
    console.log('getMoreMovies')
    const result = await request({
      url: '/ajax/moreComingList',
      params: {
        token: '',
        movieIds: movieIds
      }
    })
    console.log(result)
    dispatch({
      type: MOREMOVIES_COMING,
      payload: result.data
    })
  }
}
