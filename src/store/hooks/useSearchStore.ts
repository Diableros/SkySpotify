import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'

export const useSearchStore = () => {
  const byAuthor = useAppSelector((state: RootStateType) => state.search.Author)
  const byGenre = useAppSelector((state: RootStateType) => state.search.Genre)
  const byYear = useAppSelector((state: RootStateType) => state.search.Year)
  const byText = useAppSelector(
    (state: RootStateType) => state.search.textSearch
  )

  return { byAuthor, byGenre, byYear, byText }
}

export default useSearchStore
