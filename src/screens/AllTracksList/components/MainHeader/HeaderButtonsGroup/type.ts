import { Button, SearchField } from './enum'

export type ButtonType = {
  [key in Button]: { title: string; searchField: SearchField }
}

export enum SearchByYear {
  NewestFirst = 'Сначала новые',
  OldestFirst = 'Сначала старые',
}
