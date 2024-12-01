import { render, screen } from '@testing-library/react'
import Skeleton from './Skeleton'
import '@testing-library/jest-dom'

const setup = (props = {}) => render(<Skeleton {...props} />)

describe('Skeleton Component', () => {
  it('renders a block skeleton by default', () => {
    setup()
    const skeletonElement = screen.getByTestId('skeleton')
    expect(skeletonElement).toBeInTheDocument()
    expect(skeletonElement).toHaveClass('skeleton block')
    expect(skeletonElement).toHaveStyle('height: 50px')
    expect(skeletonElement).toHaveStyle('width: 100%')
  })

  it('renders a text skeleton when the variant is "text"', () => {
    setup({ variant: 'text' })
    const skeletonElement = screen.getByTestId('skeleton')
    expect(skeletonElement).toHaveClass('skeleton text')
  })

  it('renders with a custom height and width', () => {
    setup({ height: '200px', width: '50%' })
    const skeletonElement = screen.getByTestId('skeleton')
    expect(skeletonElement).toHaveStyle('height: 200px')
    expect(skeletonElement).toHaveStyle('width: 50%')
  })
})
