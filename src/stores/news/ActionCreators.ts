import { ActionType } from './ActionTypes'
import { Action } from './Actions'
import { Dispatch } from 'redux'
import { Article } from '../../types/News.types'

export const updateNewsArticles = (articles: Article[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATEARTICLES,
      payload: articles
    })
  }
}
