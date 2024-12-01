import { render, screen } from '@testing-library/react'
import List from './List'
import '@testing-library/jest-dom'
import { mockAnimals } from '../../../../utils/test/constant'
import userEvent from '@testing-library/user-event'

describe('List Component', () => {
  const mockOnSelect = jest.fn()

  it('should render a list of items', () => {
    render(<List items={mockAnimals} onSelect={mockOnSelect} />)
    mockAnimals.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.description)).toBeInTheDocument()
    })
  })

  it('should call onSelect when an item is clicked', async () => {
    render(<List items={mockAnimals} onSelect={mockOnSelect} />)
    const firstItem = screen.getByText(mockAnimals[0].title)
    await userEvent.click(firstItem)
    expect(mockOnSelect).toHaveBeenCalledWith(mockAnimals[0])
    expect(mockOnSelect).toHaveBeenCalledTimes(1)
  })

  it('should render the correct URL for each item', () => {
    render(<List items={mockAnimals} onSelect={mockOnSelect} />)
    mockAnimals.forEach((item) => {
      expect(screen.getByText(item.url)).toBeInTheDocument()
    })
  })
})
