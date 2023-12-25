import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { SERVICE_SHORT } from '@apollo-graphql'
import { SectionLayout } from '@components'

import { Pagination } from './pagination/pagination'
import { ServicesSection } from './services-section/services-section'

import styles from './services-page.module.scss'

export const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageCount, setPageCount] = useState<number | null>(null)
  const { loading, error, data, fetchMore } = useQuery(SERVICE_SHORT, {
    variables: {
      page: currentPage,
      pageSize: 3
    },
    onCompleted: (data) => {
      if (pageCount === null) {
        setPageCount(data.services.meta.pagination.pageCount)
      }
    }
  })
  console.log(data)

  const onLoadMore = (pageId: number) => {
    setCurrentPage(pageId)
    fetchMore({
      variables: {
        page: pageId
      }
    })
  }

  return (
    <SectionLayout title='Наши услуги'>
      <div className={styles['services-wrapper']}>
        <div className={styles.filter}>FILTERS</div>
        <ServicesSection loading={loading} error={!!error} data={data} />
      </div>
      {data && <Pagination pageCount={pageCount!} currentPage={currentPage} onClick={onLoadMore} />}
    </SectionLayout>
  )
}
