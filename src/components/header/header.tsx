import { Link } from 'react-router-dom'

import logo from '@assets/logo/logoCleaning.svg'
import { ContainerLayout } from '@components'

import { Menu } from './menu/menu'

import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <header>
      <ContainerLayout>
        <div className={styles.header}>
          <Link to='/' className={styles.header__logo}>
            <img src={logo} alt='логотип компании Dom Cleaning' draggable={false} />
          </Link>
          <Menu />
        </div>
      </ContainerLayout>
    </header>
  )
}
