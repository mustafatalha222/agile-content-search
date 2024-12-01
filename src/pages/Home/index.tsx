import { useState } from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import Header from '../../components/Header/Header'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    navigate(`/results?search=${searchTerm}`)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <figure className={styles.logoWrapper}>
          <img
            src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
            alt="Google"
            className={styles.logo}
          />
        </figure>
        <SearchInput value={searchTerm} onChange={handleSearchChange} onClear={handleClear} onSearch={handleSearch} />
        <button onClick={handleSearch} disabled={!searchTerm}>
          Search
        </button>
      </div>
    </>
  )
}

export default Home
