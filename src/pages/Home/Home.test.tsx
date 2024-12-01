import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils/test/renderWithRouter'
import Home from '.'

const setup = () => renderWithRouter(<Home />)

describe('Home Component', () => {
  it('renders the header with text', () => {
    setup()
    expect(screen.getByText(/agile content/i)).toBeInTheDocument()
  })

  it('renders the search input and button', () => {
    setup()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('should navigate to the results page with the correct query parameter when search btn pressed', async () => {
    setup()
    const searchInput = screen.getByRole('textbox')
    const searchButton = screen.getByRole('button', { name: /search/i })
    const value = 'rabbit'
    await userEvent.type(searchInput, value)
    await userEvent.click(searchButton)
    expect(window.location.pathname).toBe('/results')
    expect(window.location.search).toBe(`?search=${value}`)
  })

  it('should disable button in case of no text', () => {
    setup()
    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).toBeDisabled()
  })

  it('should enable search button when search is not empty', async () => {
    setup()
    const searchInput = screen.getByRole('textbox')
    await userEvent.type(searchInput, 'lion')
    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).toBeEnabled()
  })

  it('clears the search input when the clear button is clicked', async () => {
    setup()
    const searchInput = screen.getByPlaceholderText(/search/i)
    const value = 'cow'
    await userEvent.type(searchInput, value)
    expect(searchInput).toHaveValue(value)

    const clearButton = screen.getByTestId('clear-icon')
    await userEvent.click(clearButton)
    expect(searchInput).toHaveValue('')
  })
})
