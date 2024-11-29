import { memo } from 'react'
import styles from './Skeleton.module.css'

type SkeletonProps = {
  height?: string | number
  width?: string | number
  variant?: 'text' | 'image' | 'block' | 'circle'
}

const Skeleton = ({ height = '50px', width = '100%', variant = 'block' }: SkeletonProps) => {
  const skeletonClass = `${styles.skeleton} ${styles[variant]}`
  return <div className={skeletonClass} style={{ height, width }} />
}

export default memo(Skeleton)
