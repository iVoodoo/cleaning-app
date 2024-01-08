import { GetServiceBySlugQuery } from 'gql/graphql'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { SERVICE_BY_SLUG } from '@apollo-graphql'
import { Button, Error, Loader, SectionLayout } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { addToCart, cartSelector, removeFromCart } from '@store'
import { IItemInCart } from '@types'

import styles from './service-page.module.scss'

export const ServicePage = () => {
  const { slug } = useParams()
  const { data, loading, error } = useQuery<GetServiceBySlugQuery>(SERVICE_BY_SLUG, {
    variables: {
      slug
    }
  })
  enum ButtonTitle {
    ADD_TO_ORDER = 'Добавить в заказ',
    REMOVE_FROM_ORDER = 'Удалить из заказа'
  }

  const { items } = useAppSelector(cartSelector)
  const dispatch = useAppDispatch()

  const isItemInCart = (id: string) => {
    return !!items.find((item) => item.id === id)
  }

  const orderClick = ({ id, serviceName, price }: IItemInCart) => {
    if (isItemInCart(id)) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(addToCart({ id, serviceName, price }))
    }
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
                  id: data!.services!.data[0].id!,
                  serviceName: data!.services!.data[0].attributes!.title,
                  price: data!.services!.data[0].attributes!.price
                })
              }
            >
              {isItemInCart(data!.services!.data[0].id!) ? ButtonTitle.REMOVE_FROM_ORDER : ButtonTitle.ADD_TO_ORDER}
            </Button>
          </div>
        </div>
      </article>
    </SectionLayout>
  )
}
