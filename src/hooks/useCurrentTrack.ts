import { useLocalStorage } from 'react-use'
import { TrackType } from '@/types'
import { useAppDispatch } from './reduxHooks'
import { useAppStore } from './useAppStore'
import { setCurrentTrack } from '@/store/appSlice'

const useCurrentTrack = () => {
  const [currentTrackInLocalStorage, setCurrentTrackInLocalStorage] =
    useLocalStorage<TrackType | undefined>('currentTrack')
  const currentTrackInStore = useAppStore('currentTrack') as TrackType
  const dispatch = useAppDispatch()
  let currentTrack

  if (!currentTrackInLocalStorage && currentTrackInStore) {
    setCurrentTrackInLocalStorage(currentTrackInStore)
    currentTrack = currentTrackInStore
  }

  if (currentTrackInLocalStorage && !currentTrackInStore) {
    dispatch(setCurrentTrack(currentTrackInLocalStorage))
    currentTrack = currentTrackInLocalStorage
  }

  return [currentTrack, setCurrentTrackInLocalStorage]
}

export default useCurrentTrack
