import { useLocalStorage } from 'react-use'
import { TrackType } from '@/types'
import { useAppDispatch } from './reduxHooks'
import { useAppStore } from './useAppStore'
import { setCurrentTrack } from '@/store/appSlice'

const LOCAL_STORAGE_FIELD = 'currentTrack'

const useCurrentTrack = () => {
  const [currentTrackInLocalStorage, setCurrentTrackInLocalStorage] =
    useLocalStorage<TrackType>(LOCAL_STORAGE_FIELD)
  const currentTrackInStore = useAppStore(LOCAL_STORAGE_FIELD)
  const dispatch = useAppDispatch()

  if (
    currentTrackInLocalStorage &&
    currentTrackInLocalStorage !== currentTrackInStore
  ) {
    dispatch(setCurrentTrack(currentTrackInLocalStorage))
  }

  return setCurrentTrackInLocalStorage
}

export default useCurrentTrack
