import { Frown } from 'lucide-react'

import styles from './data-not-found.module.scss'

export const DataNotFound = () => {
  return (
    <div className={styles['not-found']}>
      <Frown className={styles['not-found__emoji']} />
      <p className={styles['not-found__text']}>Запрашиваемые данные не найдены</p>
    </div>
  )
}
