import React from 'react'

import styles from './container-layout.module.scss'

export const ContainerLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
