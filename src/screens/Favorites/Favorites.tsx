import * as React from 'react'
import { useLocalStorage } from 'react-use'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import useUserStore from '@/store/hooks/useUserStore'
import TrackListItem from '../TrackList/components/TrackListItem'
import * as S from '../TrackList/TrackList.style'
import { setCurrentTrack } from '@/store/appSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { LOCAL_STORAGE_FIELD } from '../TrackList/constants'
import TableHeaderRow from '../TrackList/components/TableHeaderRow/TableHeaderRow'

const Favorites = () => {
  const tracks = useAppStore('trackList') as TrackType[]
  const currentUserId = useUserStore('id')

  const [currentTrackInLocalStorage, setCurrentTrackInLocalStorage] =
    useLocalStorage<TrackType>(LOCAL_STORAGE_FIELD)
  const currentTrackInStore = useAppStore(LOCAL_STORAGE_FIELD)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (
      currentTrackInLocalStorage &&
      currentTrackInLocalStorage !== currentTrackInStore
    ) {
      dispatch(setCurrentTrack(currentTrackInLocalStorage))
    }
  }, [currentTrackInLocalStorage, currentTrackInStore, dispatch])

  const content = tracks.filter(({ stared_user }) =>
    stared_user.some(({ id }) => id === currentUserId)
  )

  return (
    <>
      <S.PageTitle>Мои треки</S.PageTitle>
      <TableHeaderRow />
      <S.TrackList>
        {content.map((track) => (
          <TrackListItem
            key={track.id}
            trackData={track}
            setCurrentTrack={setCurrentTrackInLocalStorage}
          />
        ))}
      </S.TrackList>
    </>
  )
}

export default Favorites
