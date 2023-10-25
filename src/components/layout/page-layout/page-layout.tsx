import { Outlet } from 'react-router-dom'

import { ContainerLayout, Footer, Header } from '@components'

import styles from './page-layout.module.scss'

export const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
      <Footer />
    </div>
  )
}
