import { Frown, Trash2 } from 'lucide-react'

import { SectionLayout } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { cartSelector, clearCart, removeFromCart } from '@store'
import { IItemInCart } from '@types'

import styles from './cart-page.module.scss'

export const CartPage = () => {
  const cart = useAppSelector(cartSelector)
  const dispatch = useAppDispatch()
  const onRemoveClick = (item: IItemInCart) => {
    dispatch(removeFromCart(item))
  }
  const onClearCart = () => {
    dispatch(clearCart())
  }

  if (cart.items.length === 0) {
    return (
      <SectionLayout title='Корзина'>
        <div className={styles.cart__empty}>
          <Frown className={styles.empty__emoji} />
          <p className={styles.empty__text}>Корзина пуста</p>
        </div>
      </SectionLayout>
    )
  }

  return (
    <SectionLayout title='Корзина'>
      <div className={styles['cart-wrapper']}>
        <div className={styles['cart-clear']}>
          <button type='button' className={styles['cart-clear__button']} onClick={onClearCart}>
            Очистить корзину
          </button>
        </div>
        <div className={styles.cart}>
          {cart.items.map((item: IItemInCart) => {
            return (
              <div className={styles.cart__item} key={item.id}>
                <p className={styles.item__title}>{item.serviceName}</p>
                <p className={styles.item__price}>{item.price}&#32;₽</p>
                <button className={styles.item__remove} type='button' onClick={() => onRemoveClick(item)}>
                  <Trash2 className={styles['item__remove--icon']} />
                </button>
              </div>
            )
          })}
        </div>
        <div className={styles.summarize}>
          <p className={styles.summarize__title}>Итого</p>
          <p className={styles.summarize__price}>{cart.totalPrice}&#32;₽</p>
        </div>
      </div>
    </SectionLayout>
  )
}
