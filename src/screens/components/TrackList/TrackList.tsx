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

  const getFilteredTracks = React.useCallback(() => {
    if (tracksArray) {
      const filterResultByText = (searchString: string, title: string) => {
        return title.toLocaleLowerCase().includes(searchString.toLowerCase())
      }

      const isFiltersDisabled =
        pathname.includes('collections') || pathname.includes(Route.Favorites)

      return tracksArray
        .filter(({ author, genre, name }) => {
          if (isFiltersDisabled) {
            return !byText.length || filterResultByText(byText, name)
          }

          return (
            (!byAuthor.length || byAuthor.includes(author)) &&
            (!byGenre.length || byGenre.includes(genre)) &&
            (!byText.length || filterResultByText(byText, name))
          )
        })
        .sort(({ release_date: adate }, { release_date: bdate }) => {
          if (isFiltersDisabled) {
            return 0
          }

          const current = new Date(adate).valueOf()
          const next = new Date(bdate).valueOf()

          if (byYear.includes(SearchByYear.OldestFirst)) {
            return current - next
          }

          if (byYear.includes(SearchByYear.NewestFirst)) {
            return next - current
          }

          return 0
        })
    }
    return []
  }, [byAuthor, byGenre, byText, byYear, tracksArray, pathname])

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
