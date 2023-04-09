import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userInitialState = {
  login: true,
  id: 0,
  token: '',
  userName: '',
  email: '',
}

export type UserStateType = typeof userInitialState

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    userLogin(_, action: PayloadAction<UserStateType>) {
      return {
        ...action.payload,
        login: true,
      }
    },
    userLogout() {
      return userInitialState
    },
  },
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer
