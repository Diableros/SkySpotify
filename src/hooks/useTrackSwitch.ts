import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import useCurrentTrack from './useCurrentTrack'

export type TrackSwitchType = {
  prev: () => void
  next: (shuffle?: boolean) => void
}

const useTrackSwitch = (): TrackSwitchType => {
  const tracklist = useAppStore('trackList') as TrackType[]
  const { currentTrack, setCurrentTrack } = useCurrentTrack()

  const indexOfCurrentTrack = tracklist.findIndex(
    ({ id }) => id === currentTrack.id
  )

  const handlePrevTrack = () => {
    if (indexOfCurrentTrack > 0) {
      setCurrentTrack(tracklist[indexOfCurrentTrack - 1])
    }
  }

  const handleNextTrack = (shuffle?: boolean) => {
    if (shuffle) {
      setCurrentTrack(tracklist[Math.floor(tracklist.length * Math.random())])
    } else if (indexOfCurrentTrack < tracklist.length - 1) {
      setCurrentTrack(tracklist[indexOfCurrentTrack + 1])
    }
  }

  return { prev: handlePrevTrack, next: handleNextTrack }
}

export default useTrackSwitch
