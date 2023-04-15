import { SearchButtonsType } from '../type'
import { TRACKS_NO_DATA } from '../constants'
import { SongType } from '@/types'

const getSearchOptionsList = (
  searchField: SearchButtonsType,
  trackList?: SongType[] | undefined
): string[] => {
  if (!trackList?.length) return [TRACKS_NO_DATA]

  const optionsSet = new Set<string>(
    trackList.map((listItem) => {
      if (searchField === 'release_date') {
        const currentItemDate = new Date(listItem[searchField])

        return String(currentItemDate.getFullYear())
      }

      return listItem[searchField]
    })
  )

  const optionsArray = Array.from(optionsSet).sort()

  return optionsArray
}

export default getSearchOptionsList
