import { useState } from 'react'
import Header from '../../components/Header/Header'

function Results() {
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onClear = () => {
    setSearchTerm('')
  }

  return (
    <>
      <Header value={searchTerm} onChange={onChange} onClear={onClear} showSearch={true} />
    </>
  )
}

export default Results
