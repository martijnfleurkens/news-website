import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducerCollection'

export const store = configureStore({
  reducer: reducers
})
