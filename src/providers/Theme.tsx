import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '@/theme'
import Theme from '@/theme/enums'
import GlobalStyle from '@/global_style/globalStyles'

const DEFAULT_THEME = Theme.Dark

export type ThemeContextType = {
  currentTheme: Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

export const useThemeContext = () => {
  const themeContextState = React.useContext(ThemeContext)
  if (!themeContextState) {
    throw new Error(
      'useThemeContext can be accessed only under AppThemeProvider component!'
    )
  }

  return themeContextState
}

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(DEFAULT_THEME)
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === Theme.Dark ? Theme.Light : Theme.Dark
    )
  }

  const memoizedContextObject = React.useMemo(
    () => ({ currentTheme, toggleTheme }),
    [currentTheme]
  )

  const theme = themes[currentTheme]

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={memoizedContextObject}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default AppThemeProvider
