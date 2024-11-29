import React from 'react'
import styles from './SearchInput.module.css'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  style?: React.CSSProperties
  inputStyle?: React.CSSProperties
}

const SearchInput = ({ value, onChange, onClear, style, inputStyle }: SearchInputProps) => {
  return (
    <div className={styles.searchWrapper} style={style}>
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
        className={styles.input}
        style={inputStyle}
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
