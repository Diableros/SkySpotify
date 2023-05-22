import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import useCurrentTrack from './useCurrentTrack'

const useTrackSwitch = (): [() => void, () => void] => {
  const tracklist = useAppStore('trackList') as TrackType[]
  const { currentTrack, setCurrentTrack } = useCurrentTrack()

  const indexOfCurrentTrack = tracklist.findIndex(
    ({ id }) => id === currentTrack.id
  )

  const handlePrevTrack = () => {
    if (indexOfCurrentTrack > 0)
      setCurrentTrack(tracklist[indexOfCurrentTrack - 1])
  }

  const handleNextTrack = () => {
    if (indexOfCurrentTrack < tracklist.length - 1)
      setCurrentTrack(tracklist[indexOfCurrentTrack + 1])
  }

  return [handlePrevTrack, handleNextTrack]
}

export default useTrackSwitch
