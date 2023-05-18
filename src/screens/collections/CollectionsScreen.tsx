import * as React from 'react'
import { useParams } from 'react-router-dom'
import * as S from '../AllTracksList/AllTracksList.style'
import useCollection from '@/queryService/qieryHooks/useCollections'
import TrackList from '../components/TrackList'

const CollectionsScreen = () => {
  const { playlist } = useParams()

  const { data, isLoading, refetch, isRefetching, isError } =
    useCollection(playlist)

  React.useEffect(() => {
    refetch()
  }, [playlist, refetch])

  return (
    <>
      <S.PageTitle>
        {isLoading || isRefetching ? 'Загрузка данных...' : data?.name}
      </S.PageTitle>
      <TrackList
        tracksArray={data?.items}
        showError={isError}
        showSkeleton={!data || isLoading || isRefetching}
      />
    </>
  )
}

export default CollectionsScreen
