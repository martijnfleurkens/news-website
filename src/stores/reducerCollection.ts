import { combineReducers } from 'redux'
import newsReducer from './news/Reducer'

const reducers = combineReducers({
  news: newsReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
