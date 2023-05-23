import { useAppSelector } from '@/store/hooks/reduxHooks'
import { RootStateType } from '@/store'
import { Button } from '@/screens/AllTracksList/components/MainHeader/HeaderButtonsGroup/enum'

export const useSearchStore = () => {
  const byAuthor = useAppSelector((state: RootStateType) => state.search.Author)
  const byGenre = useAppSelector((state: RootStateType) => state.search.Genre)
  const byYear = useAppSelector((state: RootStateType) => state.search.Year)
  const byText = useAppSelector(
    (state: RootStateType) => state.search.textSearch
  )

  return {
    [Button.Author]: byAuthor,
    [Button.Genre]: byGenre,
    [Button.Year]: byYear,
    byText,
  }
}

export default useSearchStore
