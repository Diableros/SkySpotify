import { ThemeType } from './types'
import Theme from './enums'

export const darkTheme: ThemeType = {
  name: Theme.Dark,
  color: {
    textMain: '#fff',
    textSecondry: '#4e4e4e',
    hover: '#d9b6ff',
    active: '#ad61ff',
    bgMain: '#181818',
    bgMenu: '#1c1c1c',
    bgDropList: '#313131',
    bgDropListSlider: '#4b4949',
    bgTrackHover: '#fff02',
    textError: '#ff5a5a',
  },
}

const lightTheme: ThemeType = {
  name: Theme.Light,
  color: {
    textMain: '#181818',
    textSecondry: '#b1b1b1',
    hover: '#ad61ff',
    active: '#d9b6ff',
    bgMain: '#fff',
    bgMenu: '#F6F5F3',
    bgDropList: '#eee',
    bgDropListSlider: '#e2e2e2',
    bgTrackHover: '#00002',
    textError: '#ff5a5a',
  },
}

const theme: Record<Theme, ThemeType> = {
  [Theme.Dark]: darkTheme,
  [Theme.Light]: lightTheme,
}

export default theme
