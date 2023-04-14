import { ButtonType, OPTIONS_NOT_FOUND, TRACKS_LOADING } from '../constants'
import { SongType } from '@/types'

type FieldType = keyof Pick<SongType, 'author' | 'release_date' | 'genre'>

const getUniqOptionsArr = (data: SongType[], field: FieldType): string[] => {
  const optionsSet = new Set<string>()

  data.forEach((elem) => {
    optionsSet.add(elem[field])
  })

  const optionsArray = Array.from(optionsSet).sort((a, b) => a.localeCompare(b))

  return optionsArray
}

const getSearchOptionsList = (
  trackList: SongType[] | undefined,
  searchType: string
): string[] => {
  if (!trackList) return [TRACKS_LOADING]

  switch (searchType) {
    // case ButtonType.Author: - почему так не работает?!
    case ButtonType.Author:
      return getUniqOptionsArr(trackList, 'author')

    case ButtonType.Year:
      return getUniqOptionsArr(trackList, 'release_date')

    case ButtonType.Genre:
      return getUniqOptionsArr(trackList, 'genre')

    default:
      return [OPTIONS_NOT_FOUND]
  }
}

export default getSearchOptionsList
