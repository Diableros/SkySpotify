import * as React from 'react'
import RouterProvider from './Router'
import QueryProvider from './Query'
import ReduxProvider from './Redux'
import AppThemeProvider from './Theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <AppThemeProvider>
        <ReduxProvider>
          <RouterProvider>{children}</RouterProvider>
        </ReduxProvider>
      </AppThemeProvider>
    </QueryProvider>
  )
}

export default Providers
