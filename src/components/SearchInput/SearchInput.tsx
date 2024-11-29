import React from 'react'
import styles from './SearchInput.module.css'

type SearchInputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  searchWrapper?: string
  inputStyle?: string
}

const SearchInput = ({ value, onChange, onClear, searchWrapper, inputStyle }: SearchInputProps) => {
  return (
    <div className={`${styles.searchWrapper} ${searchWrapper}`}>
      <div className={styles.iconWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="9" r="7" />
          <line x1="22" y1="22" x2="14.65" y2="14.65" />
        </svg>
      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for animals..."
        className={`${styles.input} ${inputStyle}`}
      />

      {value && (
        <div className={styles.clearWrapper} onClick={onClear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="18" x2="18" y2="6" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default SearchInput
