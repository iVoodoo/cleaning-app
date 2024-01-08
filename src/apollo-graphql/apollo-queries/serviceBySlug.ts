import { gql } from '@apollo/client'

export const SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: String) {
    services(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          full_description
          full_image {
            data {
              attributes {
                url
              }
            }
          }
          price
        }
      }
    }
  }
`
