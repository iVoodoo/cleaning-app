import { Frown, Trash2 } from 'lucide-react'
import React, { ReactEventHandler } from 'react'

import { Button } from '@components'
import { useAppDispatch } from '@hooks'
import { removeFromCart } from '@store'
import { ICart, IItemInCart, RoutesLink } from '@types'

import styles from './cart-dropdown.module.scss'

export const CartDropdown: React.FC<Omit<ICart, 'totalPrice'>> = ({ items }) => {
  const dispatch = useAppDispatch()

  const onRemoveClick = (item: IItemInCart, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(removeFromCart(item))
  }
  return (
    <aside className={styles.dropdown}>
      <div className={styles.dropdown__items}>
        {items.length > 0 ? (
          items.map((item: IItemInCart) => (
            <div className={styles.cart__item} key={item.id}>
              <p className={styles.item__title}>{item.serviceName}</p>
              <p className={styles.item__price}>{item.price}&#32;₽</p>
              <button className={styles.item__remove} type='button' onClick={(e) => onRemoveClick(item, e)}>
                <Trash2 className={styles['item__remove--icon']} />
              </button>
            </div>
          ))
        ) : (
          <div className={styles.cart__empty}>
            <Frown className={styles.empty__emoji} />
            <p className={styles.empty__text}>Корзина пуста</p>
          </div>
        )}
      </div>
      <Button link={RoutesLink.CART} className={styles.dropdown__button} length='long'>
        Перейти в корзину
      </Button>
    </aside>
  )
}
