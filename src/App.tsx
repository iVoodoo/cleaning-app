import { RouterProvider } from 'react-router-dom'

import { PageLayout } from '@components'
import { router } from '@routes'

const App = () => {
  return (
    <RouterProvider router={router}>
      <PageLayout />
    </RouterProvider>
  )
}
export default App
