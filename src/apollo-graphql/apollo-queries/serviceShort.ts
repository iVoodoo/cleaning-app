import { gql } from '@apollo/client'

export const SERVICE_SHORT = gql`
  query GetServicesShort($page: Int, $pageSize: Int, $filters: ServiceFiltersInput) {
    services(filters: $filters, pagination: { page: $page, pageSize: $pageSize }) {
      data {
        attributes {
          title
          slug
          preview_image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`
