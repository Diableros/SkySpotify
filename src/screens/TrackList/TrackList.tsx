import * as React from 'react'
import { useLocalStorage } from 'react-use'
import useFullTrackList from '@/queryService/qieryHooks/useFullTrackList'
import MainHeader from './components/MainHeader/MainHeader'
import Skeleton from './components/Skeleton'
import * as S from './TrackList.style'
import TrackListItem from './components/TrackListItem'
import TableHeaderRow from './components/TableHeaderRow/TableHeaderRow'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setCurrentTrack } from '@/store/appSlice'
import { LOCAL_STORAGE_FIELD } from './constants'

const TrackList = () => {
  // console.log('Tracklist render')
  const { data, isLoading, isError } = useFullTrackList()
  const [tracksData, setTracksData] = React.useState<TrackType[] | undefined>()

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

  React.useEffect(() => {
    setTracksData(data)
  }, [data])

  const errorMessage = (
    <S.ErrorWrapper>
      <S.ErrorMessage>Error getting list of tracks</S.ErrorMessage>
    </S.ErrorWrapper>
  )

  const successContent = (
    <S.TrackList>
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
    </S.TrackList>
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
