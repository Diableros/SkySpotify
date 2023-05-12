import { useQuery } from '@tanstack/react-query'
import req from '../request'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setTrackStore } from '@/store/appSlice'
import { TrackType } from '@/types'
import queries from '../queries'
import errorCatcher from '../helpers/errorCatcher'
import QueryKey from '../queryKeys'

const useFullTrackList = () => {
  const dispatch = useAppDispatch()

  const handleGetFullTracklist = (trackList: TrackType[]) => {
    dispatch(setTrackStore(trackList))
  }

  return useQuery({
    queryFn: () =>
      req<TrackType[]>({
        method: 'get',
        endpoint: queries.Catalog.TrackAllList,
      }),
    queryKey: [QueryKey.FullTrackList],
    onError: errorCatcher,
    onSuccess: handleGetFullTracklist,
  })
}

export default useFullTrackList
