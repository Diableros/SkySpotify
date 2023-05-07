import { useQuery } from '@tanstack/react-query'
import req from './request/KyRequest'
import { useAppDispatch } from '../hooks/reduxHooks'
import { setTrackStore } from '@/store/appSlice'

const useTracksQuery = () => {
  const dispatch = useAppDispatch()

  return useQuery({
    queryFn: () => req(),
    queryKey: ['fullTrackList'],
    onError: (err) => {
      if (err instanceof Error) {
        // console.log(err.message);
      }
    },
    onSuccess: (trackList) => {
      dispatch(setTrackStore(trackList))
    },
  })
}

export default useTracksQuery
