import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import appReducer from './appSlice'
import searchReducer from './searchSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    search: searchReducer,
  },
})

export default store

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
