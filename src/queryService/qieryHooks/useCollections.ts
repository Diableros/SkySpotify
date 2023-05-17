import { useQuery } from '@tanstack/react-query'
import req from '../request'
import queries from '../queries'
import errorCatcher from '../helpers/errorCatcher'
import QueryKey from '../queryKeys'
import { ReqArgumentsType, ReqMethod } from '../request/types'
import { CollectionType } from '../apiTypes'

const useCollection = (id: ReqArgumentsType['param']) => {
  return useQuery({
    queryFn: () =>
      req<CollectionType>({
        method: ReqMethod.Get,
        endpoint: queries.Catalog.Collection,
        param: id,
      }),
    queryKey: [QueryKey.CollectionList],
    onError: errorCatcher,
    onSuccess: (data) => data,
    enabled: !!id,
    refetchOnWindowFocus: false,
  })
}

export default useCollection
