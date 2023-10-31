import { RouterProvider } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from '@apollo-graphql'
import { router } from '@routes'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}
export default App
