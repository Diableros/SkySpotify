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
  tracksArray: TrackType[]
  showSkeleton?: boolean
  showError?: boolean
}
const TrackList = ({
  tracksArray,
  showSkeleton = false,
  showError = false,
}: PropsType) => {
  const { byAuthor, byGenre, byText, byYear } = useSearchStore()
  const [filteredTracks, setFilteredTracks] = React.useState<TrackType[]>([])
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

  React.useEffect(() => {
    if (tracksArray)
      setFilteredTracks(
        tracksArray.filter((track) => {
          const searchString = byText.toLowerCase()
          const title = track.name.toLocaleLowerCase()
          return title.includes(searchString)
        })
      )
  }, [tracksArray, byText])

  const filteredContent = filteredTracks.length ? (
    filteredTracks.map((track) => (
      <TrackListItem
        key={track.id}
        trackData={track}
        setCurrentTrack={setCurrentTrackInLocalStorage}
      />
    ))
  ) : (
    <S.MessageWrapper>
      <S.NotFound>Треки не найдены...</S.NotFound>
    </S.MessageWrapper>
  )

  const successContent = (
    <S.TrackList>
      <TableHeaderRow />
      {!showSkeleton ? filteredContent : <Skeleton />}
    </S.TrackList>
  )

  const errorContent = (
    <S.MessageWrapper>
      <S.ErrorMessage>Error getting list of tracks</S.ErrorMessage>
    </S.MessageWrapper>
  )

  return !showError ? successContent : errorContent
}

export default TrackList
