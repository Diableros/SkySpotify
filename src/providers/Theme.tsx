import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '@/theme'
import Theme from '@/theme/enums'
import GlobalStyle from '@/global_style/globalStyles'

export type ThemeContextType = {
  currentTheme: Theme
  toggleTheme: (newTheme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: Theme.Dark,
  toggleTheme: () => {},
})

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(Theme.Dark)
  const toggleTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme)
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
