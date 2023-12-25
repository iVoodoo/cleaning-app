import cn from 'clsx'

import styles from './loader.module.scss'

interface LoaderProps {
  size: 's' | 'm' | 'l'
}

enum SizeType {
  small = 's',
  medium = 'm',
  large = 'l'
}

export const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <span
      className={cn(styles.loader, {
        [styles.loader_s]: size === 's',
        [styles.loader_m]: size === 'm',
        [styles.loader_l]: size === 'l'
      })}
    />
  )
}
