import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrackType } from '@/types'

export type AppStateType = {
  trackList: TrackType[] | undefined
  currentTrack: TrackType | null
  isAutoplay: boolean
}

const appInitialState: AppStateType = {
  trackList: Array(0),
  currentTrack: null,
  isAutoplay: false,
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
    setIsAutoplay(state, action: PayloadAction<boolean>) {
      return { ...state, isAutoplay: action.payload }
    },
  },
})

export const { setTrackStore, setCurrentTrack, setIsAutoplay } =
  appSlice.actions

export default appSlice.reducer
