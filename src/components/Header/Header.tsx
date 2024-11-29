import { memo } from 'react'
import styles from './Header.module.css'
import SearchInput from '../SearchInput/SearchInput'

interface HeaderProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  showSearch?: boolean
}

const Header = ({ value, onChange, onClear, showSearch = false }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {showSearch ? (
        <div className={styles.search}>
          <img
            src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
            alt="Google"
            className={styles.logo}
          />
          <SearchInput
            value={value!}
            onChange={onChange!}
            onClear={onClear!}
            style={{ maxWidth: 500 }}
            inputStyle={{ padding: 8, paddingLeft: '2.5rem' }}
          />
        </div>
      ) : (
        <div className={styles.title}>
          <strong>Agile Content</strong>
          <span> Frontend Test</span>
        </div>
      )}

      <div className={styles.avatar}>
        <img
          src="https://avatar.iran.liara.run/public"
          alt="User Avatar"
          className={styles.avatarImage}
          loading="lazy"
        />
      </div>
    </header>
  )
}

export default memo(Header)
