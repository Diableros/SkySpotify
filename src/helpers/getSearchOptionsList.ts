import ButtonType from '@/screens/Main/components/MainHeader/HeaderButton/constants'
import { SongType } from '@/types'

const getUniqOptionsArr = (data: SongType[], field: string): string[] => {
  if (data.length) {
    const optionsSet = new Set<string>()

    data.forEach((elem) => {
      optionsSet.add(elem[field])
    })

    const optionsArray = Array.from(optionsSet).sort((a, b) =>
      a.localeCompare(b)
    )

    console.log('data from helper', field, optionsArray)

    return optionsArray
  }

  return ['Options not found']
}

const getSearchOptionsList = (
  data: SongType[],
  searchType: ButtonType
): string[] => {
  switch (searchType) {
    // case ButtonType.Author: - почему так не работает?!
    case 'Author':
      return getUniqOptionsArr(data, 'author')

    case ButtonType.Year:
      return getUniqOptionsArr(data, 'release_date')

    case ButtonType.Genre:
      return getUniqOptionsArr(data, 'genre')

    default:
      console.log('DEFAULT CASE', searchType)
      return ['Опции не найдены']
  }
}

export default getSearchOptionsList
