import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Details from './components/Details'
import styles from './Results.module.css'
import { IAnimal } from '../../types/Animal'
import Modal from '../../components/Modal/Modal'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce'
import useAnimalData from './hooks/useAnimalData'
import List from './components/List/List'
import SkeletonView from './components/SkeletonView'

function Results() {
  const [selectedItem, setSelectedItem] = useState<IAnimal | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('search') || ''
  const [searchValue, setSearchValue] = useState(query)
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { data, loading } = useAnimalData(debouncedSearchValue)

  useEffect(() => {
    setSelectedItem(null)
    handleSearchChange()
  }, [debouncedSearchValue])

  const handleSearchChange = () => setSearchParams({ search: searchValue })

  const handleClear = () => {
    setSearchValue('')
    setSearchParams({})
  }

  const handleSelectItem = (item: IAnimal) => {
    if (item.id !== selectedItem?.id) {
      setSelectedItem(item)
    }
  }

  const closeModal = () => {
    if (window.innerWidth < 768) setSelectedItem(null)
  }

  return (
    <>
      <Header
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={handleClear}
        showSearch={true}
        onSearch={handleSearchChange}
      />

      {loading ? (
        <SkeletonView />
      ) : !data.length ? (
        <div className={styles.message}>
          {debouncedSearchValue && (
            <p>
              No results found for <strong>'{debouncedSearchValue}'</strong>.
            </p>
          )}
          <p>
            Try looking for:
            <strong> insect, fish, crocodile, bear, cetaceans, cow, lion, rabbit, cat, snake, dog, bird</strong>.
          </p>
        </div>
      ) : (
        <main className={styles.content}>
          <section className={styles.listWrapper}>
            <List items={data} onSelect={handleSelectItem} />
          </section>
          {selectedItem && (
            <aside className={styles.detailsWrapper}>
              <Details item={selectedItem} />
            </aside>
          )}
        </main>
      )}

      <div className={styles.modalWrapper}>
        {selectedItem && (
          <Modal onClose={closeModal}>
            <Details item={selectedItem} />
          </Modal>
        )}
      </div>
    </>
  )
}

export default Results
