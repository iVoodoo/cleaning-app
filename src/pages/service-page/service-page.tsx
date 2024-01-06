import { GetServiceBySlugQuery } from 'gql/graphql'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { SERVICE_BY_SLUG } from '@apollo-graphql'
import { Button, Error, Loader, SectionLayout } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { addToCart, cartSelector } from '@store'

import styles from './service-page.module.scss'

export const ServicePage = () => {
  const { slug } = useParams()
  const { data, loading, error } = useQuery<GetServiceBySlugQuery>(SERVICE_BY_SLUG, {
    variables: {
      slug
    }
  })

  const value = useAppSelector(cartSelector)
  console.log(value.length)
  const dispatch = useAppDispatch()

  const orderClick = ({ serviceName, price }: { serviceName: string; price: number }) => {
    dispatch(addToCart({ serviceName, price }))
  }

  if (loading) {
    return <Loader size='l' />
  }

  if (error) {
    return <Error />
  }

  return (
    <SectionLayout title={data!.services!.data[0].attributes!.title}>
      <article className={styles.service}>
        <div className={styles.description}>
          <Markdown>{`${data!.services!.data[0].attributes!.full_description}`}</Markdown>
        </div>
        <div className={styles.content}>
          <img
            className={styles.content__image}
            src={`${import.meta.env.VITE_STRAPI_URL}${data!.services!.data[0].attributes!.full_image.data!.attributes?.url}`}
            alt={`Изображение, которое иллюстрирует услугу ${data!.services!.data[0].attributes!.title}`}
            width='580'
            height='740'
            loading='lazy'
          />
          <div className={styles.content__order}>
            <div className={styles.order__price}>
              <p className={styles.price__title}>Цена</p>
              <p className={styles.price__number}>{data!.services!.data[0].attributes!.price}&#32;₽</p>
            </div>
            <Button
              length='short'
              onClick={() =>
                orderClick({
                  serviceName: data!.services!.data[0].attributes!.title,
                  price: data!.services!.data[0].attributes!.price
                })
              }
            >
              Заказать
            </Button>
          </div>
        </div>
      </article>
    </SectionLayout>
  )
}
