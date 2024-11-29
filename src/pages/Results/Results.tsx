import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import List from './List/List'
import Details from './Details/Details'
import styles from './Results.module.css'
import getAnimalData from '../../utils/data'
import { IAnimal } from '../../types/Animal'
import Modal from '../../components/Modal/Modal'
import Skeleton from '../../components/Skeleton/Skeleton'

function Results() {
  const [data, setData] = useState<IAnimal[]>([])
  const [filteredData, setFilteredData] = useState<IAnimal[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedItem, setSelectedItem] = useState<IAnimal | null>(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      const animalData = await getAnimalData()
      setData(animalData)
      setFilteredData(animalData)
      setloading(false)
    }

    fetchData()
  }, [])

  const handleClear = () => {
    setSearchValue('')
    setFilteredData(data)
  }

  const handleSelectItem = (item: IAnimal) => {
    if (item.id !== selectedItem?.id) {
      setSelectedItem(item)
    }
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <Header
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={handleClear}
        showSearch={true}
      />

      {loading && (
        <ul className={styles.skeletonList}>
          {[...Array(4).keys()].map(() => (
            <li className={styles.skeletonListItem}>
              <Skeleton height={12} width={200} />
              <Skeleton height={15} width={300} />
              <Skeleton height={20} width={'80%'} />
            </li>
          ))}
        </ul>
      )}

      <main className={styles.content}>
        <section className={styles.listWrapper}>
          <List items={filteredData} onSelect={handleSelectItem} />
        </section>
        {selectedItem && (
          <aside className={styles.detailsWrapper}>
            <Details item={selectedItem} />
          </aside>
        )}
      </main>

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
