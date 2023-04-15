import { ButtonType } from './type'
import { Button, SearchField } from './enum'

export const OPTIONS_NOT_FOUND = 'Опции не найдены'
export const TRACKS_NO_DATA = 'Нет данных о треках'

const BUTTON_TITLE_AUTHOR = 'исполнителю'
const BUTTON_TITLE_YEAR = 'году выпуска'
const BUTTON_TITLE_GENRE = 'жанру'

export const searchButtons: ButtonType = {
  [Button.Author]: {
    title: BUTTON_TITLE_AUTHOR,
    searchField: SearchField.Author,
  },
  [Button.Year]: {
    title: BUTTON_TITLE_YEAR,
    searchField: SearchField.ReleaseDate,
  },
  [Button.Genre]: {
    title: BUTTON_TITLE_GENRE,
    searchField: SearchField.Genre,
  },
}
