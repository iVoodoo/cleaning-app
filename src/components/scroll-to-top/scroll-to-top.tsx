import upArrow from '@assets/icons/upArrow.svg'

import styles from './scroll-to-top.module.scss'

export const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={scrollToTop} className={styles.button}>
      <img src={upArrow} alt='up arrow for scroll to top' />
    </button>
  )
}
