import clsx from 'clsx'
import { useLocalStorage } from 'react-use'
import useTracksQuery from '@/hooks/useTracksQuery'
import s from './TrackList.module.scss'
import MainHeader from './components/MainHeader/MainHeader'
import Skeleton from './components/Skeleton'
import * as S from './TrackList.style'
import TrackListItem from './components/TrackListItem'
import TableHeaderRow from './components/TableHeaderRow/TableHeaderRow'
import useAppStore from '@/hooks/useAppStore'
import { TrackType } from '@/types'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { setCurrentTrack } from '@/store/appSlice'

const LOCAL_STORAGE_FIELD = 'currentTrack'

const TrackList = () => {
  const { data, isLoading, isError } = useTracksQuery()

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

  const errorMessage = (
    <S.ErrorWrapper>
      <S.ErrorMessage>Error getting list of tracks</S.ErrorMessage>
    </S.ErrorWrapper>
  )

  const successContent = (
    <ul className={clsx(s.trackList, 'styled-scroll-bar')}>
      {data && !isLoading ? (
        data.map((track) => (
          <TrackListItem
            key={track.id}
            trackData={track}
            setCurrentTrack={setCurrentTrackInLocalStorage}
          />
        ))
      ) : (
        <Skeleton />
      )}
    </ul>
  )

  return (
    <>
      <MainHeader />
      <TableHeaderRow />
      {!isError ? successContent : errorMessage}
    </>
  )
}

export default TrackList
