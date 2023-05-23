import { TRACKS_NO_DATA } from '../constants'
import { TrackType } from '@/types'
import { Button, SearchField } from '../enum'
import { SearchByYear } from '../type'

const getSearchOptionsList = (
  searchField: SearchField,
  trackList?: TrackType[]
): string[] => {
  if (!trackList?.length) return [TRACKS_NO_DATA]

  if (searchField === SearchField.ReleaseDate) {
    return Object.values(SearchByYear).map((option) => option)
  }

  const optionsSet = new Set<string>(
    trackList.map((listItem) => {
      // if (searchField === SearchField.ReleaseDate) {
      //   const currentItemDate = new Date(listItem[SearchField.ReleaseDate])

      //   return String(currentItemDate.getFullYear())
      // }

      return listItem[searchField]
    })
  )

  const optionsArray = Array.from(optionsSet).sort((a, b) => a.localeCompare(b))

  return optionsArray
}

export default getSearchOptionsList
