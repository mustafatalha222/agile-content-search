import { faker } from '@faker-js/faker'
import { IAnimal } from '../types/Animal'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Function to generate a single animal object
const createAnimal = (id: number): IAnimal => {
  const type = faker.animal.type()
  return {
    id,
    type,
    url: faker.internet.url(),
    title: faker.animal[type as keyof typeof faker.animal]?.() || type,
    description: faker.lorem.sentences(),
    image: faker.image.urlPicsumPhotos({ width: 644, height: 362 }),
  }
}

// Function to generate animal data with simulated delay
const getAnimalData = async (): Promise<IAnimal[]> => {
  await delay(2000) // Simulate a 2-second network delay
  return Array.from({ length: 100 }, (_, index) => createAnimal(index + 1))
}

export default getAnimalData
