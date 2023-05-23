import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userInitialState = {
  login: false,
  id: 0,
  token: '',
  userName: '',
  email: '',
}

export type UserDataType = typeof userInitialState

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    userLogin(_, action: PayloadAction<UserDataType>) {
      return {
        ...action.payload,
        login: true,
      }
    },
    userLogout() {
      return userInitialState
    },
    userSetAccessToken(state, action: PayloadAction<{ token: string }>) {
      return {
        ...state,
        token: action.payload.token,
      }
    },
  },
})

export const { userLogin, userLogout, userSetAccessToken } = userSlice.actions

export default userSlice.reducer
