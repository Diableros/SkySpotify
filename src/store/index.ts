import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import interfaceReducer from './interfaceSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    interface: interfaceReducer,
  },
})

export default store

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
