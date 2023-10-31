import { useQuery } from '@apollo/client'
import { SERVICE_FOR_PRICE_LIST } from '@apollo-graphql'

import styles from './price-list.module.scss'

export const PriceList: React.FC = () => {
  const { loading, error, data } = useQuery(SERVICE_FOR_PRICE_LIST)
  if (loading) {
    return <h1>LOADING...</h1>
  }
  if (error) {
    return <h1>DAMN...</h1>
  }

  console.log(data)

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>Прайс-лист</h2>
      <div className={styles.section__content}>
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
    </section>
  )
}
