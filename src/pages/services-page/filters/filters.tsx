import cn from 'clsx'

import styles from './filters.module.scss'

interface IFilters {
  title: string
  items: { id: string; name: string }[]
  selectedItems: { id: string; name: string }[]
  onSelectedItem: (id: string, name: string) => void
}
export const Filters: React.FC<IFilters> = ({ title, items, onSelectedItem, selectedItems }) => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>{title}</h3>
      <ul className={styles.filter__list}>
        {items.map((item) => (
          <li key={item.id} className={styles.filter__item}>
            <button
              type='button'
              className={cn(styles.filter__button, {
                [styles['filter__button--selected']]: selectedItems.some((selectedItem) => selectedItem.id === item.id)
              })}
              onClick={() => onSelectedItem(item.id, item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
