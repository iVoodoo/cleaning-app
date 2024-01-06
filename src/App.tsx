import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from '@apollo-graphql'
import { router } from '@routes'
import { store } from '@store'

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  )
}
export default App
