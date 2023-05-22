import * as React from 'react'
import { useLocalStorage } from 'react-use'
import LocalStorageField from '@/constants'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setCurrentTrack as setStoreCurrentTrack } from '@/store/appSlice'

const useCurrentTrack = () => {
  const dispatch = useAppDispatch()

  const stateCurrentTrack = useAppStore('currentTrack') as TrackType

  const [localCurrentTrack, setLocalCurrentTrack] = useLocalStorage<TrackType>(
    LocalStorageField.CurrentTrack
  )

  const setСurrentTrackExternally = (track: TrackType) => {
    setLocalCurrentTrack(track)
    dispatch(setStoreCurrentTrack(track))
  }

  React.useEffect(() => {
    if (localCurrentTrack && !stateCurrentTrack) {
      dispatch(setStoreCurrentTrack(localCurrentTrack))
    }
    if (!localCurrentTrack && stateCurrentTrack) {
      setLocalCurrentTrack(stateCurrentTrack)
    }
  }, [localCurrentTrack, setLocalCurrentTrack, stateCurrentTrack, dispatch])

  return {
    currentTrack: stateCurrentTrack,
    setCurrentTrack: setСurrentTrackExternally,
  }
}

export default useCurrentTrack
