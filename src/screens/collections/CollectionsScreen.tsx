import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import useAppStore from '@/store/hooks/useAppStore'
import { TrackType } from '@/types'
import TrackListItem from '../TrackList/components/TrackListItem'
import * as S from '../TrackList/TrackList.style'
import { setCurrentTrack } from '@/store/appSlice'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import useCollection from '@/queryService/qieryHooks/useCollections'
import Skeleton from '../TrackList/components/Skeleton'
import TableHeaderRow from '../TrackList/components/TableHeaderRow/TableHeaderRow'
import LocalStorageField from '@/constants'

const CollectionsScreen = () => {
  const { playlist } = useParams()

  const { data, isLoading, refetch, isRefetching } = useCollection(playlist)

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
    refetch()
  }, [playlist, refetch])

  return (
    <>
      <S.PageTitle>
        {isLoading || isRefetching ? 'Загрузка данных...' : data?.name}
      </S.PageTitle>
      <TableHeaderRow />
      <S.TrackList>
        {!isLoading && !isRefetching && data ? (
          data.items.map((track) => (
            <TrackListItem
              key={track.id}
              trackData={track}
              setCurrentTrack={setCurrentTrackInLocalStorage}
            />
          ))
        ) : (
          <Skeleton quantity={7} />
        )}
      </S.TrackList>
    </>
  )
}

export default CollectionsScreen
