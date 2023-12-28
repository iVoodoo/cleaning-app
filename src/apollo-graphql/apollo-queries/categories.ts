import { gql } from '@apollo/client'

export const CATEGORIES = gql`
  query GetCatogories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`
