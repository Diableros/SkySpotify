import { useQueryClient, useMutation } from '@tanstack/react-query'
import useUserStore from '@/store/hooks/useUserStore'
import { TrackType } from '@/types'
import { FavoriteResponse } from '../apiTypes'
import queries from '../queries'
import QueryKey from '../queryKeys'
import req from '../request'
import { ReqMethod } from '../request/types'

const useToggleFavorite = (
  isLiked: boolean,
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const token = useUserStore('token') as string

  // const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: TrackType['id']) =>
      req<FavoriteResponse>({
        method: !isLiked ? ReqMethod.Post : ReqMethod.Delete,
        endpoint: queries.Catalog.TrackFavorite,
        param: String(id),
        options: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        undelayed: true,
      }),
    mutationKey: [QueryKey.ToggleFavorite],
    onSuccess: () => {
      // queryClient.invalidateQueries({
      //   queryKey: [QueryKey.FullTrackList],
      // })
      setIsLiked(!isLiked)
    },
    onError: (error: string) => {
      throw new Error(error)
    },
  })
}

export default useToggleFavorite
