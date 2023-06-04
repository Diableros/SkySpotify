import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { TrackType } from '@/types'
import * as S from './Tracklist.style'
import TrackListItem from './TrackListItem'
import useSearchStore from '@/store/hooks/useSearchStore'
import Skeleton from '../Skeleton'
import TableHeaderRow from './TableHeaderRow'
import useCurrentTrack from '@/hooks/useCurrentTrack'
import { Button } from '@/screens/AllTracksList/components/MainHeader/HeaderButtonsGroup/enum'
import { SearchByYear } from '@/screens/AllTracksList/components/MainHeader/HeaderButtonsGroup/type'
import useUserStore from '@/store/hooks/useUserStore'
import { Route } from '@/providers/routes'

type PropsType = {
  tracksArray?: TrackType[]
  showSkeleton?: boolean
  showError?: boolean
}
const TrackList = ({
  tracksArray,
  showSkeleton = false,
  showError = false,
}: PropsType) => {
  const currentUserId = useUserStore('id')
  const { pathname } = useLocation()
  const {
    [Button.Author]: byAuthor,
    [Button.Genre]: byGenre,
    [Button.Year]: byYear,
    byText,
  } = useSearchStore()
  const { setCurrentTrack } = useCurrentTrack()
  const [filteredTracks, setFilteredTracks] = React.useState<TrackType[]>([])

  const getFilteredTracks = React.useCallback(
    () => () => {
      if (tracksArray) {
        let result = [...tracksArray]

        if (
          !pathname.includes('collections') &&
          !pathname.includes(Route.Favorites)
        ) {
          if (byAuthor.length > 0)
            result = result.filter((track) => byAuthor.includes(track.author))

          if (byGenre.length > 0)
            result = result.filter((track) => byGenre.includes(track.genre))

          if (byYear.length > 0) {
            result.sort(({ release_date: adate }, { release_date: bdate }) => {
              const current = new Date(adate).valueOf()
              const next = new Date(bdate).valueOf()

              if (byYear.includes(SearchByYear.OldestFirst)) {
                return current - next
              }
              return next - current
            })
          }
        }

        if (byText.length > 0)
          result = result.filter((track) => {
            const searchString = byText.toLowerCase()
            const title = track.name.toLocaleLowerCase()
            return title.includes(searchString)
          })

        return result
      }
      return tracksArray || []
    },
    [byAuthor, byGenre, byText, byYear, tracksArray, pathname]
  )

  React.useEffect(() => {
    if (tracksArray) setFilteredTracks(getFilteredTracks())
  }, [tracksArray, setFilteredTracks, getFilteredTracks])

  const filteredContent = filteredTracks.length ? (
    filteredTracks.map((track) => (
      <TrackListItem
        key={track.id}
        trackData={track}
        setCurrentTrack={setCurrentTrack}
        isLikedTrack={track.stared_user.some(({ id }) => id === currentUserId)}
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
