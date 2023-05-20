import * as React from 'react'
import { useLocalStorage } from 'react-use'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import LocalStorageField from '@/constants'

const useTrackSwitch = (): [() => void, () => void, TrackType] => {
  const tracklist = useAppStore('trackList') as TrackType[]
  const currentTrack = useAppStore('currentTrack') as TrackType
  const [, setLocalStorageCurrentTrack] = useLocalStorage(
    LocalStorageField.CurrentTrack
  )
  const [newCurrentTrack, setNewCurrentTrack] = React.useState(currentTrack)

  const indexOfTrack = tracklist.findIndex(
    ({ id }) => id === newCurrentTrack.id
  )

  const handlePrevTrack = () => {
    if (indexOfTrack > 0) setNewCurrentTrack(tracklist[indexOfTrack - 1])
  }

  const handleNextTrack = () => {
    if (indexOfTrack < tracklist.length - 1)
      setNewCurrentTrack(tracklist[indexOfTrack + 1])
  }

  React.useEffect(() => {
    setNewCurrentTrack(currentTrack)
  }, [currentTrack, setNewCurrentTrack])

  React.useEffect(() => {
    setLocalStorageCurrentTrack(newCurrentTrack)
  }, [setLocalStorageCurrentTrack, newCurrentTrack])

  return [handlePrevTrack, handleNextTrack, newCurrentTrack]
}

export default useTrackSwitch
