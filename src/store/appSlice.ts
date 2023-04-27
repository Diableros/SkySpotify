import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrackType } from '@/types'

export type AppStateType = {
  trackList: TrackType[] | undefined
  currentTrack: TrackType | null
}

const appInitialState: AppStateType = {
  trackList: Array(0),
  currentTrack: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setTrackStore(state, action: PayloadAction<TrackType[] | undefined>) {
      return { ...state, trackList: action.payload }
    },
    setCurrentTrack(state, action: PayloadAction<TrackType>) {
      return { ...state, currentTrack: action.payload }
    },
  },
})

export const { setTrackStore, setCurrentTrack } = appSlice.actions

export default appSlice.reducer
