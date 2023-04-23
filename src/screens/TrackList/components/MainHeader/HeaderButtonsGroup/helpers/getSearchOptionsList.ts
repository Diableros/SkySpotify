import { TRACKS_NO_DATA } from '../constants'
import { TrackType } from '@/types'
import { SearchField } from '../enum'

const getSearchOptionsList = (
  searchField: SearchField,
  trackList?: TrackType[]
): string[] => {
  if (!trackList?.length) return [TRACKS_NO_DATA]

  const optionsSet = new Set<string>(
    trackList.map((listItem) => {
      if (searchField === SearchField.ReleaseDate) {
        const currentItemDate = new Date(listItem[SearchField.ReleaseDate])

        return String(currentItemDate.getFullYear())
      }

      return listItem[searchField]
    })
  )

  const optionsArray = Array.from(optionsSet).sort((a, b) => a.localeCompare(b))

  return optionsArray
}

export default getSearchOptionsList
