import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SearchInput from './SearchInput'

describe('SearchInput Component', () => {
  let mockOnChange: jest.Mock
  let mockOnClear: jest.Mock
  let mockOnSearch: jest.Mock
  beforeEach(() => {
    mockOnChange = jest.fn()
    mockOnClear = jest.fn()
    mockOnSearch = jest.fn()
  })

  const setup = (value = '') => {
    render(<SearchInput value={value} onChange={mockOnChange} onClear={mockOnClear} onSearch={mockOnSearch} />)
  }

  it('should render correctly with empty input', () => {
    setup()
    const input = screen.getByPlaceholderText(/search/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('renders clear button when value is provided', () => {
    setup('lion')
    const clearButton = screen.getByTestId('clear-icon')
    expect(clearButton).toBeInTheDocument()
  })

  it('does not render clear button when value is empty', () => {
    setup()
    const clearButton = screen.queryByTestId('clear-icon')
    expect(clearButton).not.toBeInTheDocument()
  })

  it('should call onChange when typing in the input', async () => {
    const user = userEvent.setup()
    setup()
    const input = screen.getByPlaceholderText(/search/i)
    await user.type(input, 'cow')
    expect(mockOnChange).toHaveBeenCalledTimes(3)
  })

  it('should cals onClear when clicking the clear button', async () => {
    setup('lion')
    const user = userEvent.setup()
    const clearButton = screen.getByTestId('clear-icon')
    await user.click(clearButton)
    expect(mockOnClear).toHaveBeenCalled()
  })

  it('should call onSearch on pressing Enter', async () => {
    setup()
    const user = userEvent.setup()
    const input = screen.getByRole('textbox')
    await user.type(input, '{Enter}')
    expect(mockOnSearch).toHaveBeenCalled()
  })
})
