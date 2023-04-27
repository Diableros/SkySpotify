import { ThemeType } from './types'
import Theme from './enums'

export const darkTheme: ThemeType = {
  textMain: '#fff',
  textSecondry: '#4e4e4e',
  hover: '#d9b6ff',
  active: '#ad61ff',
  bgMain: '#181818',
  bgMenu: '#1c1c1c',
  bgDropList: '#313131',
  bgDropListSlider: '#4b4949',
}

const lightTheme: ThemeType = {
  textMain: '#181818',
  textSecondry: '##4e4e4e',
  hover: '#ad61ff',
  active: '#d9b6ff',
  bgMain: '#fff',
  bgMenu: '#1c1c1c',
  bgDropList: '#313131',
  bgDropListSlider: '#4b4949',
}

const theme: Record<Theme, ThemeType> = {
  [Theme.Dark]: darkTheme,
  [Theme.Light]: lightTheme,
}

export default theme
