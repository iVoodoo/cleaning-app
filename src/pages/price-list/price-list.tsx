import { Frown } from 'lucide-react'

import { useQuery } from '@apollo/client'
import { SERVICE_FOR_PRICE_LIST } from '@apollo-graphql'
import { Loader, SectionLayout } from '@components'

import styles from './price-list.module.scss'

export const PriceList: React.FC = () => {
  const { loading, error, data } = useQuery(SERVICE_FOR_PRICE_LIST)

  console.log(data)

  return (
    <SectionLayout title='Прайс-лист'>
      {loading && (
        <section className={styles.loader}>
          <Loader size='l' />
        </section>
      )}
      {error && (
        <section className={styles.error}>
          <Frown className={styles.error__emoji} />
          <p className={styles.error__text}>Что-то пошло не так...</p>
        </section>
      )}
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
              {data.services.data.map((service) => (
                <tr key={service.id}>
                  <td className={styles.table__body_first}>{service.attributes.title}</td>
                  <td className={styles.table__body_second}>{service.attributes.preview_description}</td>
                  <td className={styles.table__body_third}>от {service.attributes.price} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </SectionLayout>
  )
}
