import { Button, SearchField } from './enum'

export type ButtonType = {
  [key in Button]: { title: string; searchField: SearchField }
}
