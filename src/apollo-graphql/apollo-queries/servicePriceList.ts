import { gql } from '@apollo/client'

export const SERVICE_FOR_PRICE_LIST = gql`
  query GetServiceForPriceList {
    services {
      data {
        id
        attributes {
          title
          preview_description
          price
        }
      }
    }
  }
`
