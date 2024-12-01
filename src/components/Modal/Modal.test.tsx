import { render, screen } from '@testing-library/react'
import Modal from './Modal'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const text = 'Test Modal'
const setup = (onClose: jest.Mock) => {
  render(<Modal onClose={onClose}>{text}</Modal>)
}

describe('Modal Component', () => {
  let onClose: jest.Mock
  beforeEach(() => {
    onClose = jest.fn()
  })

  it('renders modal content', () => {
    const onClose = jest.fn()
    setup(onClose)
    const modalContent = screen.getByText(text)
    expect(modalContent).toBeInTheDocument()
  })

  it('should not close the modal when clicking inside the modal', async () => {
    setup(onClose)
    const modalContent = screen.getByText(text)
    await userEvent.click(modalContent)
    expect(onClose).toHaveBeenCalledTimes(0)
  })

  it('should render and match snapshot', () => {
    const { asFragment } = render(<Modal onClose={onClose}>{text}</Modal>)
    expect(asFragment()).toMatchSnapshot()
  })
})
