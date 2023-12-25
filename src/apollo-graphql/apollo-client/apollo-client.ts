import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_STRAPI_GRAPHQL_URL,
  cache: new InMemoryCache()
})
