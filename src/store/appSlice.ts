import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppStateType = {
  trackStore: SongType[]
}

const appInitialState = {
  trackStore: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setTrackStore(_, action: PayloadAction<AppStateType>) {
      return {
        ...action.payload,
      }
    },
  },
})

export const { setTrackStore } = appSlice.actions

export default appSlice.reducer
