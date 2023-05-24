import * as React from 'react'
import useFullTrackList from '@/queryService/qieryHooks/useFullTrackList'
import MainHeader from './components/MainHeader/MainHeader'
import { TrackType } from '@/types'
import TrackList from '../components/TrackList'

const AllTracksList = () => {
  const { data, isLoading, isError, isFetching, isFetched } = useFullTrackList()
  const [tracksData, setTracksData] = React.useState<TrackType[] | undefined>()

  React.useEffect(() => {
    if (!isFetching && isFetched) setTracksData(data)
  }, [data, isFetching, isFetched])

  return (
    <>
      <MainHeader />
      <TrackList
        tracksArray={tracksData}
        showError={isError}
        showSkeleton={!tracksData || isLoading}
      />
    </>
  )
}

export default AllTracksList
