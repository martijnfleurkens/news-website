import { ActionType } from './ActionTypes'
import { Article } from '../../types/News.types'

interface updateNewsArticlesAction {
  type: ActionType.UPDATEARTICLES
  payload: Array<Article>
}

export type Action = updateNewsArticlesAction
