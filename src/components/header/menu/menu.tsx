import cn from 'clsx'
import { ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useAppSelector } from '@hooks'
import { cartSelector } from '@store'
import { RoutesLink } from '@types'

import { CartDropdown } from './cart-dropdown/cart-dropdown'

import styles from './menu.module.scss'

const menuItems: MenuItemProps[] = [
  {
    name: 'Услуги',
    link: RoutesLink.SERVICES
  },
  {
    name: 'Прайс-лист',
    link: RoutesLink.PRICE_LIST
  },
  {
    name: 'О нас',
    link: RoutesLink.ABOUT_US
  },
  {
    name: 'Контакты',
    link: RoutesLink.CONTACTS
  },
  {
    name: 'Отзывы',
    link: RoutesLink.REVIEWS
  },
  {
    name: 'Примеры работ',
    link: RoutesLink.WORK_EXAMPLES
  }
]

const userMenuItem: MenuItemProps = {
  name: 'Профиль пользователя',
  link: RoutesLink.USER_PROFILE
}
const cartMenuItem: MenuItemProps = {
  name: 'Корзина',
  link: RoutesLink.CART
}

type MenuItemProps = {
  name: string
  link: string
}

export const Menu = () => {
  const [activePathname, setActivePathname] = React.useState<string>('')
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const location = useLocation()
  React.useEffect(() => {
    setActivePathname(location.pathname)
  }, [location])
  const cart = useAppSelector(cartSelector)
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link className={cn(styles.menu__item, { [styles.menu__item_active]: item.link === activePathname })} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={userMenuItem.link}
            className={cn(styles.menu__item, { [styles.menu__item_active]: userMenuItem.link === activePathname })}
          >
            <User />
          </Link>
        </li>
        <li onMouseLeave={() => setIsOpen(false)}>
          <Link
            onMouseOver={() => setIsOpen(true)}
            to={cartMenuItem.link}
            className={cn(styles.menu__item, styles['menu__item--cart'], {
              [styles.menu__item_active]: cartMenuItem.link === activePathname
            })}
            data-cart={cart.items.length}
          >
            <ShoppingCart />
            <div
              className={cn(styles.cart__dropdown, {
                [styles['cart__dropdown--visible']]: isOpen
              })}
              onMouseLeave={() => setIsOpen(false)}
            >
              <CartDropdown items={cart.items} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
