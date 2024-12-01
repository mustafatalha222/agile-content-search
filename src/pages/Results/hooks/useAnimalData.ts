import { useState, useEffect, useCallback } from 'react'
import { faker } from '@faker-js/faker'
import { IAnimal } from '../../../types/Animal'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Generate a single animal object
const createAnimal = (id: number): IAnimal => {
  const type = faker.animal.type()
  return {
    id,
    type,
    url: faker.internet.url(),
    title: faker.animal[type as keyof typeof faker.animal]?.() || type,
    description: faker.lorem.sentences(),
    // NOTE: Animal Images not available in Faker api
    image: faker.image.urlPicsumPhotos({ width: 644, height: 362 }),
  }
}

const getAnimalData = async (searchValue: string): Promise<IAnimal[]> => {
  await delay(1000) // 1-second delay
  if (!searchValue) return []
  const allData = Array.from({ length: 100 }, (_, index) => createAnimal(index + 1))

  const lowerCaseSearch = searchValue.toLowerCase()
  return allData.filter(
    (animal) =>
      // Search by animal name or ty type
      animal.title.toLowerCase().includes(lowerCaseSearch) || animal.type.toLowerCase().includes(lowerCaseSearch)
  )
}

const useAnimalData = (searchValue: string) => {
  const [data, setData] = useState<IAnimal[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async (searchTerm: string) => {
    setLoading(true)
    const animalData = await getAnimalData(searchTerm)
    setData(animalData)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData(searchValue)
  }, [searchValue, fetchData])

  return { data, loading, setLoading }
}

export default useAnimalData
