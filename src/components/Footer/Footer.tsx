import { memo } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© Google 2024</span>
        <span>version 0.1.0</span>
      </div>
    </footer>
  )
}

export default memo(Footer)
