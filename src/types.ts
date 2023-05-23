import { UserDataType } from '@/store/userSlice'

export type TrackType = {
  id: number
  name: string
  author: string
  release_date: string
  genre: string
  duration_in_seconds: number
  album: string
  logo: null
  track_file: string
  stared_user: UserDataType[]
}

export type ControlsType = {
  play: () => Promise<void> | undefined
  pause: () => void
  seek: (time: number) => void
  volume: (volume: number) => void
  mute: () => void
  unmute: () => void
}

export type LoopShuffleControlsType = {
  isLoop: boolean
  setIsLoop: React.Dispatch<React.SetStateAction<boolean>>
  isShuffle: boolean
  setIsShuffle: React.Dispatch<React.SetStateAction<boolean>>
}
