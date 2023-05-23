import * as React from 'react'
import RouterProvider from './Router'
import QueryProvider from './Query'
import ReduxProvider from './Redux'
import AppThemeProvider from './Theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppThemeProvider>
      <QueryProvider>
        <ReduxProvider>
          <RouterProvider>{children}</RouterProvider>
        </ReduxProvider>
      </QueryProvider>
    </AppThemeProvider>
  )
}

export default Providers
