import { useLocalStorage } from 'react-use'
import * as React from 'react'
import { setCurrentTrack } from '@/store/appSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import LocalStorageField from '@/constants'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import * as S from './Tracklist.style'
import TrackListItem from './TrackListItem'
import useSearchStore from '@/store/hooks/useSearchStore'
import Skeleton from '../Skeleton'
import TableHeaderRow from './TableHeaderRow'

type PropsType = {
  tracksArray: TrackType[] | undefined
  showSkeleton?: boolean
  showError?: boolean
}
const TrackList = ({
  tracksArray,
  showSkeleton = false,
  showError = false,
}: PropsType) => {
  const { byAuthor, byGenre, bySearch, byYear } = useSearchStore()
  const [currentTracks, setCurrentTracks] = React.useState<TrackType[]>([])
  const [currentTrackInLocalStorage, setCurrentTrackInLocalStorage] =
    useLocalStorage<TrackType>(LocalStorageField.CurrentTrack)
  const currentTrackInStore = useAppStore(LocalStorageField.CurrentTrack)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (
      currentTrackInLocalStorage &&
      currentTrackInLocalStorage !== currentTrackInStore
    ) {
      dispatch(setCurrentTrack(currentTrackInLocalStorage))
    }
  }, [currentTrackInLocalStorage, currentTrackInStore, dispatch])

  // React.useEffect(() => {
  //   if (bySearch)
  //     setCurrentTracks(
  //       currentTracks.filter((track) => track.name.includes(bySearch))
  //     )
  // }, [byAuthor, byGenre, bySearch, byYear, setCurrentTracks, currentTracks])

  const successContent = (
    <S.TrackList>
      <TableHeaderRow />
      {!showSkeleton && tracksArray ? (
        tracksArray.map((track) => (
          <TrackListItem
            key={track.id}
            trackData={track}
            setCurrentTrack={setCurrentTrackInLocalStorage}
          />
        ))
      ) : (
        <Skeleton />
      )}
    </S.TrackList>
  )

  const errorContent = (
    <S.ErrorWrapper>
      <S.ErrorMessage>Error getting list of tracks</S.ErrorMessage>
    </S.ErrorWrapper>
  )

  return !showError ? successContent : errorContent
}

export default TrackList
