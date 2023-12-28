import { ServiceEntity } from 'gql/graphql'
import { Frown } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Loader } from '@components'

import { DataNotFound } from '../data-not-found/data-not-found'

import styles from './services-section.module.scss'

interface IServicesSection {
  loading: boolean
  error: boolean
  data: any | undefined
}

export const ServicesSection: React.FC<IServicesSection> = ({ loading, error, data }) => {
  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader size='l' />
      </div>
    )
  }

  if (error) {
    return (
      <section className={styles.error}>
        <Frown className={styles.error__emoji} />
        <p className={styles.error__text}>Что-то пошло не так...</p>
      </section>
    )
  }

  if (data.services.data.length === 0) {
    return <DataNotFound />
  }

  return (
    <div className={styles.service}>
      {data.services.data.map((service: ServiceEntity) => (
        <Link to={service.attributes!.slug!} className={styles.service__item} key={service.attributes!.slug}>
          <img
            src={import.meta.env.VITE_STRAPI_URL + service.attributes!.preview_image.data!.attributes!.url}
            loading='lazy'
            alt={`${service.attributes!.title} service`}
            className={styles.item__image}
          />
          <p className={styles.item__title}>{service.attributes!.title}</p>
        </Link>
      ))}
    </div>
  )
}
