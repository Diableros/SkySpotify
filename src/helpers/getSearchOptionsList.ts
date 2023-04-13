import ButtonType, {
  OPTIONS_NOT_FOUND,
} from '@/screens/Main/components/MainHeader/HeaderButton/constants'
import { SongType } from '@/types'

// как то бы связать типы кнопок и названия полей из объекта трека
type FieldType = keyof Pick<SongType, 'author' | 'release_date' | 'genre'>

const getUniqOptionsArr = (data: SongType[], field: FieldType): string[] => {
  const optionsSet = new Set<string>()

  data.forEach((elem) => {
    optionsSet.add(elem[field])
  })

  const optionsArray = Array.from(optionsSet).sort((a, b) => a.localeCompare(b))

  console.log('data from helper', field, optionsArray)

  return optionsArray
}

const getSearchOptionsList = (
  data: SongType[],
  searchType: ButtonType
): string[] => {
  switch (searchType) {
    // case ButtonType.Author: - почему так не работает?!
    case ButtonType.Author:
      return getUniqOptionsArr(data, 'author')

    case ButtonType.Year:
      return getUniqOptionsArr(data, 'release_date')

    case ButtonType.Genre:
      return getUniqOptionsArr(data, 'genre')

    default:
      console.log('DEFAULT CASE', typeof searchType, searchType)
      return [OPTIONS_NOT_FOUND]
  }
}

export default getSearchOptionsList
