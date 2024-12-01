import { memo } from 'react'
import styles from './SkeletonView.module.css'
import Skeleton from '../../../../components/Skeleton/Skeleton'

function SkeletonView() {
  return (
    <ul className={styles.skeletonList}>
      {[...Array(5)].map((_, idx) => (
        <li className={styles.skeletonListItem} key={idx}>
          <Skeleton height={12} width={200} />
          <Skeleton height={15} width={300} />
          <Skeleton height={20} width="80%" />
        </li>
      ))}
    </ul>
  )
}

export default memo(SkeletonView)
