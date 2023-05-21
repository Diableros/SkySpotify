import Theme from './enums'

export type ThemeType = {
  name: Theme
  color: {
    textMain: string
    textSecondry: string
    hover: string
    active: string
    bgMain: string
    bgMenu: string
    bgDropList: string
    bgDropListSlider: string
    bgTrackHover: string
    textError: string
  }
}
