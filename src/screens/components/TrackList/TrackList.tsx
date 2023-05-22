import * as React from 'react'
import { TrackType } from '@/types'
import * as S from './Tracklist.style'
import TrackListItem from './TrackListItem'
import useSearchStore from '@/store/hooks/useSearchStore'
import Skeleton from '../Skeleton'
import TableHeaderRow from './TableHeaderRow'
import useCurrentTrack from '@/hooks/useCurrentTrack'

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
  const { byAuthor, byGenre, byText, byYear } = useSearchStore()
  const { setCurrentTrack } = useCurrentTrack()
  const [filteredTracks, setFilteredTracks] = React.useState<TrackType[]>([])

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
        setCurrentTrack={setCurrentTrack}
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
