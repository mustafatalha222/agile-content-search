import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

const setup = () => {
  render(<Footer />)
}

describe('Footer Component', () => {
  it('Footer', () => {
    setup()
    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
  })

  it('should render copyright and version text', () => {
    setup()
    const copyrightText = screen.getByText(/© google/i)
    expect(copyrightText).toBeInTheDocument()

    const versionText = screen.getByText(/version/i)
    expect(versionText).toBeInTheDocument()
  })
})
