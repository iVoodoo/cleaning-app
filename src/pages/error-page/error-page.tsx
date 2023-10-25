import errorImage from '@assets/graphics/image404.png'
import { Button } from '@components'

import styles from './error-page.module.scss'

export const ErrorPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <p className={styles.error__code}>404</p>
        <p className={styles.error__message}>
          К сожалению, запрашиваемая вами страница не найдена. Возможно, вы ввели неправильный адрес или ссылка, на которую вы перешли,
          устарела. Попробуйте проверить адрес ещё раз или вернуться на главную страницу нашего сайта.
        </p>
        <Button length='short' link='/'>
          На главную
        </Button>
      </div>
      <img src={errorImage} alt='Caution wet floor' className={styles.graphic} draggable={false} />
    </div>
  )
}
