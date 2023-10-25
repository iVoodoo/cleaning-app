import { Link } from 'react-router-dom'

import logo from '@assets/logo/logoCleaning.svg'
import rutubeLogo from '@assets/socials/rutubeLogo.svg'
import tgLogo from '@assets/socials/tgLogo.svg'
import vkLogo from '@assets/socials/vkLogo.svg'
import yandexZenLogo from '@assets/socials/yandexZenLogo.svg'
import youtubeLogo from '@assets/socials/youtubeLogo.svg'
import { ContainerLayout, ScrollToTop } from '@components'

import styles from './footer.module.scss'

const socials = [
  { name: 'vk', link: 'https://vk.com/id84086261', logo: vkLogo },
  { name: 'telegram', link: 'https://t.me/m1keel', logo: tgLogo },
  { name: 'rutube', link: 'https://vk.com/id84086261', logo: rutubeLogo },
  { name: 'yaZen', link: 'https://vk.com/id84086261', logo: yandexZenLogo },
  { name: 'youtube', link: 'https://vk.com/id84086261', logo: youtubeLogo }
]

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ContainerLayout>
        <div className={styles.panel}>
          <Link to='/' className={styles.panel__logo}>
            <img src={logo} alt='логотип компании Dom Cleaning' draggable={false} />
          </Link>
          <div className={styles.panel__contacts}>
            <a href='tel:+79095356666'>+ 7(909)-535-66-66</a>
            <a href='mailto:mail@domclean.ru'>mail@domclean.ru</a>
          </div>
          <nav className={styles.panel__socials}>
            <ul className={styles['social-list']}>
              {socials.map((item) => (
                <li key={item.name}>
                  <a href={item.link} target='_blank' rel='noreferrer' className={styles['social-list__item']}>
                    <img src={item.logo} alt={`${item.name} logo`} draggable={false} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={styles.company}>2020-{new Date().getFullYear()}, DomClean</p>
      </ContainerLayout>
      <ScrollToTop />
    </footer>
  )
}
