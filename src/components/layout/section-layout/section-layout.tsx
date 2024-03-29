import { PropsWithChildren } from 'react'

import styles from './section-layout.module.scss'

interface SectionLayoutProps {
  title: string
}

export const SectionLayout: React.FC<PropsWithChildren<SectionLayoutProps>> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1 className='visually-hidden'>Клининговая компания DOM Clean</h1>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  )
}
