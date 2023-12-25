import cn from 'clsx'

import styles from './pagination.module.scss'

interface IPagination {
  pageCount: number
  currentPage: number
  onClick: (page: number) => void
}

export const Pagination: React.FC<IPagination> = ({ pageCount, onClick, currentPage }) => {
  return (
    <div className={styles.pagination}>
      {[...Array(pageCount)].map((_, index) => (
        <button
          className={cn(styles.pagination__item, {
            [styles['pagination__item--active']]: index + 1 === currentPage
          })}
          onClick={() => onClick(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}
