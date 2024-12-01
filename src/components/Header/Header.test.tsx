import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import { renderWithRouter } from '../../utils/test/renderWithRouter'

describe('Header Component', () => {
  const mockOnChange = jest.fn()
  const mockOnClear = jest.fn()
  const mockOnSearch = jest.fn()

  it('should render header', () => {
    renderWithRouter(<Header />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  it('should render the title when showSearch not passed', () => {
    renderWithRouter(<Header />)
    const titleElement = screen.getByText(/agile content/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render search elements when showSearch is true', () => {
    renderWithRouter(
      <Header showSearch={true} value="test" onChange={mockOnChange} onClear={mockOnClear} onSearch={mockOnSearch} />
    )
    const logoElement = screen.getByAltText(/google/i)
    expect(logoElement).toBeInTheDocument()
    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveValue('test')
  })

  it('should call onChange when typing in the search input', async () => {
    renderWithRouter(
      <Header showSearch={true} value="" onChange={mockOnChange} onClear={mockOnClear} onSearch={mockOnSearch} />
    )
    const user = userEvent.setup()
    const searchInput = screen.getByRole('textbox')
    await user.type(searchInput, 'New Value')
    expect(mockOnChange).toHaveBeenCalled()
  })

  it('should render the avatar', () => {
    renderWithRouter(<Header />)
    const avatarImage = screen.getByAltText(/user avatar/i)
    expect(avatarImage).toBeInTheDocument()
  })
})
