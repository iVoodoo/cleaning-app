import { Frown } from 'lucide-react'

import styles from './error.module.scss'

export const Error = () => {
  return (
    <section className={styles.error}>
      <Frown className={styles.error__emoji} />
      <p className={styles.error__text}>Что-то пошло не так...</p>
    </section>
  )
}
