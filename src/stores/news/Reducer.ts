import { Action } from './Actions'
import { ActionType } from './ActionTypes'
import { Article } from '../../types/News.types'

const initialState = {
  articles: [],
  loaded: false
}

type State = {
  articles: Array<Article>
  loaded: Boolean
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATEARTICLES:
      const newState = {
        articles: action.payload,
        loaded: true
      }

      return newState

    default:
      return state
  }
}

export default reducer
