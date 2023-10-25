import { createBrowserRouter } from 'react-router-dom'

import { PageLayout } from '@components'
import { ErrorPage, MainPage, ServicesPage } from '@pages'
import { RoutesLink } from '@types'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MainPage /> },
          { path: RoutesLink.SERVICES, element: <ServicesPage /> },
          {
            path: '*',
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
])
