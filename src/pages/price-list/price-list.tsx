import { ServiceEntity } from 'gql/graphql'
import { Frown } from 'lucide-react'

import { useQuery } from '@apollo/client'
import { SERVICE_FOR_PRICE_LIST } from '@apollo-graphql'
import { Error, Loader, SectionLayout } from '@components'

import styles from './price-list.module.scss'

export const PriceList: React.FC = () => {
  const { loading, error, data } = useQuery(SERVICE_FOR_PRICE_LIST)

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader size='l' />
      </div>
    )
  }
  if (error) {
    return <Error />
  }

  return (
    <SectionLayout title='Прайс-лист'>
      {data && (
        <div className={styles.content}>
          <table className={styles.table}>
            <thead className={styles.table__header}>
              <tr>
                <th>Название услуги</th>
                <th>Описание</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              {data.services.data.map((service: ServiceEntity) => (
                <tr key={service.id}>
                  <td className={styles.table__body_first}>{service.attributes!.title}</td>
                  <td className={styles.table__body_second}>{service.attributes!.preview_description}</td>
                  <td className={styles.table__body_third}>от {service.attributes!.price} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </SectionLayout>
  )
}
