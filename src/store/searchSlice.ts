import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Button } from '@/screens/AllTracksList/components/MainHeader/HeaderButtonsGroup/enum'

export type SearchStateType = {
  textSearch: string
  [Button.Author]: string[]
  [Button.Year]: string[]
  [Button.Genre]: string[]
}

const searchInitialState: SearchStateType = {
  [Button.Author]: [],
  [Button.Year]: [],
  [Button.Genre]: [],
  textSearch: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchByAuthor(
      state,
      action: PayloadAction<{ [Button.Author]: string[] }>
    ) {
      return {
        ...state,
        [Button.Author]: action.payload[Button.Author],
      }
    },
    setSearchByYear(
      state,
      action: PayloadAction<{ [Button.Year]: SearchStateType['Year'] }>
    ) {
      return {
        ...state,
        [Button.Year]: action.payload[Button.Year],
      }
    },
    setSearchByGenre(
      state,
      action: PayloadAction<{ [Button.Genre]: string[] }>
    ) {
      return {
        ...state,
        [Button.Genre]: action.payload[Button.Genre],
      }
    },
    setSearchByText(state, action: PayloadAction<{ textSearch: string }>) {
      return {
        ...state,
        textSearch: action.payload.textSearch,
      }
    },
  },
})

export const {
  setSearchByAuthor,
  setSearchByYear,
  setSearchByGenre,
  setSearchByText,
} = searchSlice.actions

export default searchSlice.reducer
