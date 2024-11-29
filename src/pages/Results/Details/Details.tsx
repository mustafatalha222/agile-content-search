import styles from './Details.module.css'
import { IAnimal } from '../../../types/Animal'

type DetailsProps = {
  item: IAnimal | null
}

const Details = ({ item }: DetailsProps) => {
  if (!item) return

  return (
    <main className={styles.details}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.content}>
        <header>
          <div className={styles.url}>{item.url}</div>
          <h3 className={styles.title}>{item.title}</h3>
        </header>
        <section className={styles.description}>{item.description}</section>
      </div>
    </main>
  )
}

export default Details
