import * as React from 'react'
import useFullTrackList from '@/queryService/qieryHooks/useFullTrackList'
import MainHeader from './components/MainHeader/MainHeader'
import { TrackType } from '@/types'
import TrackList from '../components/TrackList'

const AllTracksList = () => {
  const { data, isLoading, isError } = useFullTrackList()
  const [, setTracksData] = React.useState<TrackType[] | undefined>()

  React.useEffect(() => {
    setTracksData(data)
  }, [data])

  return (
    <>
      <MainHeader />
      <TrackList
        tracksArray={data}
        showError={isError}
        showSkeleton={!data || isLoading}
      />
    </>
  )
}

export default AllTracksList
