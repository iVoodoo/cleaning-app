import { createBrowserRouter } from 'react-router-dom'

import { PageLayout } from '@components'
import { ErrorPage, MainPage, PriceList, ServicePage, ServicesPage } from '@pages'
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
          {
            path: RoutesLink.SERVICES,
            element: <ServicesPage />
          },
          {
            path: RoutesLink.SERVICE,
            element: <ServicePage />
          },
          {
            path: RoutesLink.PRICE_LIST,
            element: <PriceList />
          },
          {
            path: '*',
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
])
