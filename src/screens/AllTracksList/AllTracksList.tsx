import * as React from 'react'
import useFullTrackList from '@/queryService/qieryHooks/useFullTrackList'
import MainHeader from './components/MainHeader/MainHeader'
import { TrackType } from '@/types'
import TrackList from '../components/TrackList'

const AllTracksList = () => {
  const { data, isLoading, isError, isFetching } = useFullTrackList()
  const [tracksData, setTracksData] = React.useState<TrackType[] | undefined>()

  React.useEffect(() => {
    setTracksData(data)
    console.log(isFetching)
  }, [data, isFetching])

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
