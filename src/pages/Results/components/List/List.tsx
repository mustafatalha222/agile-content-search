import { IAnimal } from '../../../../types/Animal'
import styles from './List.module.css'

type ListProps = {
  items: IAnimal[]
  onSelect: (item: IAnimal) => void
}

const List = ({ items, onSelect }: ListProps) => {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li key={item.id} className={styles.listItem} onClick={() => onSelect(item)}>
          <header>
            <div className={styles.url}>{item.url}</div>
            <h3 className={styles.title}>{item.title}</h3>
          </header>
          <section className={styles.description}>{item.description}</section>
        </li>
      ))}
    </ul>
  )
}

export default List
