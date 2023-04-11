import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SongType } from '@/types'

export type AppStateType = {
  trackList: SongType[]
}

const appInitialState = {
  trackList: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setTrackStore(_, action: PayloadAction<AppStateType>) {
      return action.payload
    },
  },
})

export const { setTrackStore } = appSlice.actions

export default appSlice.reducer
