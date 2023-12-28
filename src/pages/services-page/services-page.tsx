import { CategoryEntity, CategoryEntityResponseCollection, GetCatogoriesQuery } from 'gql/graphql'
import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { CATEGORIES, SERVICE_SHORT } from '@apollo-graphql'
import { SectionLayout } from '@components'

import { Filters } from './filters/filters'
import { Pagination } from './pagination/pagination'
import { ServicesSection } from './services-section/services-section'

import styles from './services-page.module.scss'

export const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageCount, setPageCount] = useState<number | null>(null)
  const [categories, setCategories] = useState<CategoryEntity[] | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<{ id: string; name: string }[] | null>(null)

  const { loading, error, data, fetchMore } = useQuery(SERVICE_SHORT, {
    variables: {
      page: currentPage,
      pageSize: 3,
      filters:
        selectedCategories && selectedCategories?.length > 0
          ? {
              category: { name: { in: [...selectedCategories.map((item) => item.name)] } }
            }
          : {}
    },
    onCompleted: (data) => {
      setPageCount(data.services.meta.pagination.pageCount)
    }
  })

  const categoriesData = useQuery(CATEGORIES, {
    onCompleted: (data: GetCatogoriesQuery) => {
      if (categories === null) {
        setCategories(data.categories!.data)
      }
    }
  })

  const onFilterSelect = (id: string, name: string) => {
    if (selectedCategories?.some((item) => item.id === id)) {
      setSelectedCategories((prev) => [...prev!.filter((item) => item.id !== id)])
    } else {
      setSelectedCategories((prev) => (prev ? [...prev, { id, name }] : [{ id, name }]))
    }
  }

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
        <div className={styles.filter}>
          {categoriesData.data && categories && (
            <Filters
              title='Вид услуги'
              selectedItems={selectedCategories || []}
              items={categories!.map((item) => ({ id: item.id as string, name: item.attributes!.name }))}
              onSelectedItem={onFilterSelect}
            />
          )}
        </div>
        <ServicesSection loading={loading} error={!!error} data={data} />
      </div>
      {data && <Pagination pageCount={pageCount!} currentPage={currentPage} onClick={onLoadMore} />}
    </SectionLayout>
  )
}
